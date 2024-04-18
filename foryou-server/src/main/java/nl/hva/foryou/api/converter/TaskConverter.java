package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.TaskController;
import nl.hva.foryou.api.model.TaskModel;
import nl.hva.foryou.presistence.domain.Task;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

import java.time.ZonedDateTime;

public class TaskConverter extends RepresentationModelAssemblerSupport<Task, TaskModel> {

    public TaskConverter() {
        super(TaskController.class, TaskModel.class);
    }

    @Override
    public TaskModel toModel(Task entity) {
        TaskModel model = new TaskModel();
        model.setTitle(entity.getTitle());
        model.setDescription(entity.getDescription());
        model.setCategory(entity.getCategory());
        model.setPrice(entity.getPrice());
        model.setUserId(entity.getUser().getId());
        model.setCreationDate(entity.getCreationDate());
        return model;
    }

    public Task toEntity(TaskModel model) {
        Task entity = new Task();
        entity.setTitle(model.getTitle());
        entity.setDescription(model.getDescription());
        entity.setCategory(model.getCategory());
        entity.setPrice(model.getPrice());
        entity.setCreationDate(ZonedDateTime.now());
        return entity;
    }
}