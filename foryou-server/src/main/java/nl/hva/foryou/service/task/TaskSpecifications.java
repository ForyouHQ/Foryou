package nl.hva.foryou.service.task;

import nl.hva.foryou.presistence.domain.Task;
import nl.hva.foryou.presistence.domain.TaskCategory;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static java.util.function.Predicate.not;

public class TaskSpecifications {

    private TaskSpecifications() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<Task> querySpecification(TasksQuery query) {
        List<Specification<Task>> specs = new ArrayList<>();
        query.categories()
                .filter(not(Set::isEmpty))
                .map(TaskSpecifications::inTaskCategories)
                .ifPresent(specs::add);
        if (query.title() != null && !query.title().isEmpty()) {
            specs.add(TaskSpecifications.titleLike(query.title()));
        }

        return Specification.allOf(specs);
    }

    public static Specification<Task> inTaskCategories(Set<TaskCategory> categories) {
        return (root, query, criteriaBuilder) -> root.get("category").in(categories);
    }

    public static Specification<Task> titleLike(String title) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(criteriaBuilder.lower(root.get("title")), "%" + title + "%");
    }
}
