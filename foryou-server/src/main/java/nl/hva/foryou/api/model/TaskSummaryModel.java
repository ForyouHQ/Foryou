package nl.hva.foryou.api.model;

import nl.hva.foryou.presistence.domain.TaskCategory;
import org.springframework.hateoas.RepresentationModel;

public class TaskSummaryModel extends RepresentationModel<TaskSummaryModel> {

    private String id;

    private TaskCategory category;

    private String title;

    private String price;

    // TODO: Add task image

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public TaskCategory getCategory() {
        return category;
    }

    public void setCategory(TaskCategory category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
