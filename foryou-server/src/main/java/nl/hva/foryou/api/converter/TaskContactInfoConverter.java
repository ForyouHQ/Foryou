package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.TaskController;
import nl.hva.foryou.api.model.TaskContactInfoModel;
import nl.hva.foryou.presistence.domain.TaskContactInfo;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

public class TaskContactInfoConverter extends RepresentationModelAssemblerSupport<TaskContactInfo, TaskContactInfoModel> {

    public TaskContactInfoConverter() {
        super(TaskController.class, TaskContactInfoModel.class);
    }

    @Override
    public TaskContactInfoModel toModel(TaskContactInfo entity) {
        TaskContactInfoModel model = new TaskContactInfoModel();
        model.setCity(entity.getCity());
        model.setEmail(entity.getEmail());
        model.setHouseNumber(entity.getHouseNumber());
        model.setHouseNumberSuffix(entity.getHouseNumberSuffix());
        model.setPhone(entity.getPhone());
        model.setPostalCode(entity.getPostalCode());
        model.setTaskId(entity.getTask().getId());
        model.setStreet(entity.getStreet());
        return model;
    }

    public TaskContactInfo toEntity(TaskContactInfoModel model) {
        TaskContactInfo entity = new TaskContactInfo();
        entity.setCity(model.getCity());
        entity.setEmail(model.getEmail());
        entity.setHouseNumber(model.getHouseNumber());
        entity.setHouseNumberSuffix(model.getHouseNumberSuffix());
        entity.setPhone(model.getPhone());
        entity.setPostalCode(model.getPostalCode());
        entity.setStreet(model.getStreet());
        return entity;
    }
}
