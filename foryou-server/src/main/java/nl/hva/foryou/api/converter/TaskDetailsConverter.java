package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.TaskController;
import nl.hva.foryou.api.model.TaskDetailsModel;
import nl.hva.foryou.api.model.UserAddressModel;
import nl.hva.foryou.presistence.domain.Task;
import nl.hva.foryou.presistence.domain.UserAddress;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

public class TaskDetailsConverter extends RepresentationModelAssemblerSupport<Task, TaskDetailsModel> {

    public TaskDetailsConverter() {
        super(TaskController.class, TaskDetailsModel.class);
    }

    @Override
    public TaskDetailsModel toModel(Task entity) {
        TaskDetailsModel model = new TaskDetailsModel();
        model.setId(entity.getId());
        model.setTitle(entity.getTitle());
        model.setDescription(entity.getDescription());
        model.setCategory(entity.getCategory());
        model.setPrice(entity.getPrice());
        model.setEmail(entity.getUser().getEmail());
        model.setPhone(entity.getUser().getPhone());
        model.setCreationDate(entity.getCreationDate());
        return model;
    }
}
