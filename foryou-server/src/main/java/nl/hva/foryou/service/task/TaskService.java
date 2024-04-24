package nl.hva.foryou.service.task;

import jakarta.transaction.Transactional;
import nl.hva.foryou.api.model.TaskSummaryModel;
import nl.hva.foryou.exception.TaskNotFoundException;
import nl.hva.foryou.presistence.domain.Task;
import nl.hva.foryou.presistence.domain.TaskCategory;
import nl.hva.foryou.presistence.domain.TaskSummary;
import nl.hva.foryou.presistence.repository.TaskRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Transactional
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task getTask(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
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

}