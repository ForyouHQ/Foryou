package nl.hva.foryou.service.task;

import nl.hva.foryou.presistence.domain.task.TaskCategory;

import java.util.EnumSet;
import java.util.Optional;

public record TasksQuery(
        String title,
        Optional<EnumSet<TaskCategory>> categories
) {
}
