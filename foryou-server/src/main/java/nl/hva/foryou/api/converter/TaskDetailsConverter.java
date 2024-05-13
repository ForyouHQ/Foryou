package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.TaskController;
import nl.hva.foryou.api.model.TaskDetailsModel;
import nl.hva.foryou.presistence.domain.task.Task;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

public class TaskDetailsConverter extends RepresentationModelAssemblerSupport<Task, TaskDetailsModel> {

    public TaskDetailsConverter() {
        super(TaskController.class, TaskDetailsModel.class);
    }

    @Override
    public TaskDetailsModel toModel(Task entity) {
        TaskDetailsModel model = new TaskDetailsModel();
        model.setUserId(entity.getUser().getId());
        model.setTitle(entity.getTitle());
        model.setDescription(entity.getDescription());
        model.setCategory(entity.getCategory());
        model.setPrice(entity.getPrice());
        model.setEmail(entity.getUser().getEmail());
        model.setPhone(entity.getUser().getPhone());
        model.setCreationDate(entity.getCreationDate());
        return model;
    }

    public Task toEntity(TaskDetailsModel model) {
        Task task = new Task();
        task.setTitle(model.getTitle());
        task.setDescription(model.getDescription());
        task.setCategory(model.getCategory());
        task.setPrice(model.getPrice());
        task.setCreationDate(model.getCreationDate());
        return task;
    }
}
