package nl.hva.foryou.service.task;

import jakarta.transaction.Transactional;
import nl.hva.foryou.exception.TaskNotFoundException;
import nl.hva.foryou.presistence.domain.task.Task;
import nl.hva.foryou.presistence.domain.task.TaskCategory;
import nl.hva.foryou.presistence.domain.task.TaskContactInfo;
import nl.hva.foryou.presistence.domain.task.TaskSummary;
import nl.hva.foryou.presistence.repository.TaskContactInfoRepository;
import nl.hva.foryou.presistence.repository.TaskRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    private final TaskContactInfoRepository taskContactInfoRepository;

    public TaskService(TaskRepository taskRepository, TaskContactInfoRepository taskContactInfoRepository) {
        this.taskRepository = taskRepository;
        this.taskContactInfoRepository = taskContactInfoRepository;
    }

    @Transactional
    public Task createTask(Task task) {
        task.setCreationDate(ZonedDateTime.now());
        return taskRepository.save(task);
    }

    public Page<TaskSummary> getAllTasks(Pageable pageable) {
        return taskRepository.findAllTaskSummaries(pageable);
    }

    public List<String> getAllTaskCategories() {
        return Arrays.stream(TaskCategory.values()).map(TaskCategory::name).toList();
    }

    public Page<Task> filterTasks(TasksQuery query, Pageable pageable) {
        return taskRepository.findAll(TaskSpecifications.querySpecification(query), pageable);
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
    }

    public TaskContactInfo getTaskContactInfoByTaskId(Long id) {
        return taskContactInfoRepository.findTaskContactInfoByTaskId(id).orElseThrow(() -> new TaskNotFoundException(id));
    }

}