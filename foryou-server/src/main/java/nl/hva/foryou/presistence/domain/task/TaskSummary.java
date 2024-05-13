package nl.hva.foryou.presistence.domain.task;

import java.math.BigDecimal;

public interface TaskSummary {
    Long getId();

    TaskCategory getCategory();

    String getTitle();

    BigDecimal getPrice();

    //TODO: add task image
}
