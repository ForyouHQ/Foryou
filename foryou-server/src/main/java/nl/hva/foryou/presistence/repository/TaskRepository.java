package nl.hva.foryou.presistence.repository;

import nl.hva.foryou.presistence.domain.task.Task;
import nl.hva.foryou.presistence.domain.task.TaskSummary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface TaskRepository extends JpaRepository<Task, Long> , JpaSpecificationExecutor<Task> {
    @Query("SELECT t.id AS id, t.title AS title, t.price AS price, t.category AS category FROM Task t")
    Page<TaskSummary> findAllTaskSummaries(Pageable pageable);
}
