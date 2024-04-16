package nl.hva.foryou.service;

import jakarta.transaction.Transactional;
import nl.hva.foryou.exception.UserNotFoundException;
import nl.hva.foryou.presistence.domain.User;
import nl.hva.foryou.presistence.domain.UserAddress;
import nl.hva.foryou.presistence.repository.UserAddressRepository;
import nl.hva.foryou.presistence.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final UserAddressRepository userAddressRepository;

    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$");

    public UserService(UserRepository userRepository, UserAddressRepository userAddressRepository) {
        this.userRepository = userRepository;
        this.userAddressRepository = userAddressRepository;
    }

    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean isValidEmail(String email) {
        return email != null && EMAIL_PATTERN.matcher(email).matches();
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));
    }

    public UserAddress findUserAddressByUserId(Long userId) {
        return userAddressRepository.findByUserId(userId);
    }

    @Transactional
    public UserAddress saveUserAddress(UserAddress userAddress) {
        return userAddressRepository.save(userAddress);
    }

}
