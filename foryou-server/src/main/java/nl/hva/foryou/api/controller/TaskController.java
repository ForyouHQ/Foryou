package nl.hva.foryou.api.controller;

import jakarta.validation.Valid;
import nl.hva.foryou.api.converter.TaskContactInfoConverter;
import nl.hva.foryou.api.converter.TaskConverter;
import nl.hva.foryou.api.converter.TaskSummaryConverter;
import nl.hva.foryou.api.model.TaskContactInfoModel;
import nl.hva.foryou.api.model.TaskModel;
import nl.hva.foryou.api.model.TaskSummaryModel;
import nl.hva.foryou.exception.TaskNotFoundException;
import nl.hva.foryou.exception.UserNotFoundException;
import nl.hva.foryou.presistence.domain.*;
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
@CrossOrigin(origins = {"https://foryou-server-test.onrender.com", "https://foryou-frontend-test.onrender.com"})
public class TaskController {

    private final TaskService taskService;

    private final UserService userService;

    private final TaskContactInfoService taskContactInfoService;

    private final TaskConverter taskConverter = new TaskConverter();

    private final TaskSummaryConverter taskSummaryConverter = new TaskSummaryConverter();

    private final TaskContactInfoConverter taskContactInfoConverter = new TaskContactInfoConverter();


    public TaskController(TaskService taskService, UserService userService, TaskContactInfoService taskContactInfoService) {
        this.taskService = taskService;
        this.userService = userService;
        this.taskContactInfoService = taskContactInfoService;
    }

    @PostMapping
    public ResponseEntity<TaskModel> createTask(@RequestBody TaskModel model) {
        Task task = taskConverter.toEntity(model);
        User user = userService.findUserById(model.getUserId());
        if (user == null) {
            throw new UserNotFoundException(model.getUserId());
        }
        task.setUser(user);
        Task createdTask = taskService.createTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskConverter.toModel(createdTask));
    }

    @PostMapping("/contact")
    public ResponseEntity<TaskContactInfoModel> createTaskContactInfo(@RequestBody TaskContactInfoModel taskContactInfoModel) {
        TaskContactInfo taskContactInfo = taskContactInfoConverter.toEntity(taskContactInfoModel);
        Task task = taskService.getTask(taskContactInfoModel.getTaskId());
        if (task == null) {
            throw new TaskNotFoundException(taskContactInfoModel.getTaskId());
        }
        taskContactInfo.setTask(task);
        taskContactInfoService.createTaskContactInfo(taskContactInfo);
        TaskContactInfoModel taskContactInfoModelCreated = taskContactInfoConverter.toModel(taskContactInfo);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskContactInfoModelCreated);
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
        Page<TaskSummaryModel> taskSummaryModels = taskConverter.toTaskSummaryModels(tasks);
        return ResponseEntity.ok(assembler.toModel(taskSummaryModels));
    }
}
