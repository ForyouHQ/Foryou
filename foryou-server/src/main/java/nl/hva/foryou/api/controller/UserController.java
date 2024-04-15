package nl.hva.foryou.api.controller;

import nl.hva.foryou.api.converter.UserConverter;
import nl.hva.foryou.api.model.UserModel;
import nl.hva.foryou.exception.EmailAlreadyExistsException;
import nl.hva.foryou.exception.InvalidEmailException;
import nl.hva.foryou.presistence.domain.User;
import nl.hva.foryou.service.UserService;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/users", produces = MediaTypes.HAL_JSON_VALUE)
public class UserController {

    private final UserService userService;

    private final UserConverter userConverter = new UserConverter();

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public ResponseEntity<User> createAccount(@RequestBody UserModel userModel) {
        User user = userConverter.toEntity(userModel);

        if (userService.findUserByEmail(userModel.getEmail()) != null) {
            throw new EmailAlreadyExistsException("Email address already exists");
        }
        if (!userService.isValidEmail(userModel.getEmail())) {
            throw new InvalidEmailException("Invalid email address");
        }
        User createdUser = userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }
}
