package nl.hva.foryou.presistence.repository;

import jakarta.validation.constraints.NotBlank;
import nl.hva.foryou.presistence.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(@NotBlank String email);
}
