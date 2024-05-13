package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.TaskController;
import nl.hva.foryou.api.model.TaskSummaryModel;
import nl.hva.foryou.presistence.domain.task.Task;
import nl.hva.foryou.presistence.domain.task.TaskSummary;
import org.springframework.data.domain.Page;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

public class TaskSummaryConverter extends RepresentationModelAssemblerSupport<TaskSummary, TaskSummaryModel> {

    public TaskSummaryConverter() {
        super(TaskController.class, TaskSummaryModel.class);
    }

    @Override
    public TaskSummaryModel toModel(TaskSummary entity) {
        TaskSummaryModel model = new TaskSummaryModel();
        model.setId(entity.getId());
        model.setCategory(entity.getCategory());
        model.setTitle(entity.getTitle());
        model.setPrice(entity.getPrice());
        return model;
    }

    public TaskSummaryModel toTaskSummaryModel(Task entity) {
        TaskSummaryModel model = new TaskSummaryModel();
        model.setId(entity.getId());
        model.setCategory(entity.getCategory());
        model.setTitle(entity.getTitle());
        model.setPrice(entity.getPrice());
        return model;
    }

    public Page<TaskSummaryModel> toTaskSummaryModels(Page<Task> tasks) {
        return tasks.map(this::toTaskSummaryModel);
    }
}
