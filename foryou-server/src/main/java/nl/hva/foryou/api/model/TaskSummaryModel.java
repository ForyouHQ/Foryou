package nl.hva.foryou.api.model;

import nl.hva.foryou.presistence.domain.task.TaskCategory;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import java.math.BigDecimal;

@Relation(collectionRelation = "_content")
public class TaskSummaryModel extends RepresentationModel<TaskSummaryModel> {

    private Long id;

    private TaskCategory category;

    private String title;

    private BigDecimal price;

    // TODO: Add task image


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
