package nl.hva.foryou.presistence.repository;

import nl.hva.foryou.presistence.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface TaskRepository extends JpaRepository<Task, Long> {
}
