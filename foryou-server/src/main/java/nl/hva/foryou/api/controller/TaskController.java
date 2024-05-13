package nl.hva.foryou.api.controller;

import jakarta.validation.Valid;
import nl.hva.foryou.api.converter.TaskDetailsConverter;
import nl.hva.foryou.api.converter.TaskSummaryConverter;
import nl.hva.foryou.api.model.TaskDetailsModel;
import nl.hva.foryou.api.model.TaskSummaryModel;
import nl.hva.foryou.exception.UserNotFoundException;
import nl.hva.foryou.presistence.domain.task.Task;
import nl.hva.foryou.presistence.domain.task.TaskContactInfo;
import nl.hva.foryou.presistence.domain.task.TaskSummary;
import nl.hva.foryou.presistence.domain.User;
import nl.hva.foryou.presistence.domain.UserAddress;
import nl.hva.foryou.service.task.TaskContactInfoService;
import nl.hva.foryou.service.task.TaskService;
import nl.hva.foryou.service.UserService;
import nl.hva.foryou.service.task.TasksQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.MediaTypes;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/tasks", produces = MediaTypes.HAL_JSON_VALUE)
@CrossOrigin
public class TaskController {

    private final TaskService taskService;

    private final UserService userService;

    private final TaskContactInfoService taskContactInfoService;

    private final TaskSummaryConverter taskSummaryConverter = new TaskSummaryConverter();

    private final TaskDetailsConverter taskDetailsConverter = new TaskDetailsConverter();

    public TaskController(TaskService taskService, UserService userService, TaskContactInfoService taskContactInfoService) {
        this.taskService = taskService;
        this.userService = userService;
        this.taskContactInfoService = taskContactInfoService;
    }

    @PostMapping
    public ResponseEntity<TaskDetailsModel> createTask(@RequestBody TaskDetailsModel model) {
        Task task = taskDetailsConverter.toEntity(model);
        User user = userService.findUserById(model.getUserId());
        if (user == null) {
            throw new UserNotFoundException(model.getUserId());
        }
        task.setUser(user);
        Task createdTask = taskService.createTask(task);
        TaskContactInfo taskContactInfo = new TaskContactInfo();
        taskContactInfo.setTask(createdTask);
        taskContactInfo.setAddressInfo(model.getAddress());
        taskContactInfo.setEmail(model.getEmail());
        taskContactInfo.setPhone(model.getPhone());
        taskContactInfoService.createTaskContactInfo(taskContactInfo);
        TaskDetailsModel taskDetailsModel = taskDetailsConverter.toModel(createdTask);
        taskDetailsModel.setAddress(model.getAddress());
        return ResponseEntity.status(HttpStatus.CREATED).body(taskDetailsModel);
    }

    @GetMapping
    public ResponseEntity<PagedModel<TaskSummaryModel>> getAllTasks(Pageable pageable, PagedResourcesAssembler<TaskSummary> assembler) {
        Page<TaskSummary> tasks = taskService.getAllTasks(pageable);
        return ResponseEntity.ok(assembler.toModel(tasks, taskSummaryConverter));
    }

    @GetMapping("/categories")
    public ResponseEntity<List<String>> getAllTaskCategories() {
        return ResponseEntity.ok().body(taskService.getAllTaskCategories());
    }

    @PostMapping("/filter")
    public ResponseEntity<PagedModel<EntityModel<TaskSummaryModel>>> searchTasks(
            @RequestBody @Valid TasksQuery query,
            Pageable pageable,
            PagedResourcesAssembler<TaskSummaryModel> assembler) {

        Page<Task> tasks = taskService.filterTasks(query, pageable);
        Page<TaskSummaryModel> taskSummaryModels = taskSummaryConverter.toTaskSummaryModels(tasks);
        return ResponseEntity.ok(assembler.toModel(taskSummaryModels));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTask(@PathVariable Long id) {
        Task task = taskService.getTaskById(id);
        User user = task.getUser();
        if (user == null) {
            throw new UserNotFoundException("User not found for task with id: " + id);
        }
        UserAddress userAddress = userService.findUserAddressByUserId(user.getId());
        TaskDetailsModel taskDetailsModel = taskDetailsConverter.toModel(task);
        taskDetailsModel.setAddress(userAddress.getAddressInfo());
        return ResponseEntity.ok().body(taskDetailsModel);
    }

}
