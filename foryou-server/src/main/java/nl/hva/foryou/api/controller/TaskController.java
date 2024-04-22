package nl.hva.foryou.api.controller;

import nl.hva.foryou.api.converter.TaskConverter;
import nl.hva.foryou.api.model.TaskModel;
import nl.hva.foryou.exception.UserNotFoundException;
import nl.hva.foryou.presistence.domain.Task;
import nl.hva.foryou.presistence.domain.User;
import nl.hva.foryou.service.TaskService;
import nl.hva.foryou.service.UserService;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/tasks", produces = MediaTypes.HAL_JSON_VALUE)
public class TaskController {

    private final TaskService taskService;

    private final UserService userService;

    private final TaskConverter taskConverter = new TaskConverter();

    public TaskController(TaskService taskService, UserService userService) {
        this.taskService = taskService;
        this.userService = userService;
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
}
