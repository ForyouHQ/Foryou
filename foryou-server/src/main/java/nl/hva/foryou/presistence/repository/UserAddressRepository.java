package nl.hva.foryou.presistence.repository;

import nl.hva.foryou.presistence.domain.UserAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {
}
