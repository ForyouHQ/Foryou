package nl.hva.foryou.presistence.domain;

public interface TaskSummary {
    Long getId();

    TaskCategory getCategory();

    String getTitle();

    String getPrice();

    //TODO: add task image
}
