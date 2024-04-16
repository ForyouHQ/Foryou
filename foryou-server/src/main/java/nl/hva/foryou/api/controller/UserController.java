package nl.hva.foryou.api.controller;

import nl.hva.foryou.api.converter.UserAddressConverter;
import nl.hva.foryou.api.converter.UserConverter;
import nl.hva.foryou.api.model.UserAddressModel;
import nl.hva.foryou.api.model.UserModel;
import nl.hva.foryou.exception.DuplicateAddressException;
import nl.hva.foryou.exception.EmailAlreadyExistsException;
import nl.hva.foryou.exception.InvalidEmailException;
import nl.hva.foryou.presistence.domain.User;
import nl.hva.foryou.presistence.domain.UserAddress;
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

    private final UserAddressConverter userAddressConverter = new UserAddressConverter();

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

    @PostMapping("/address")
    public ResponseEntity<UserAddressModel> createAddress(@RequestBody UserAddressModel userAddressModel) {
        UserAddress userAddress = userAddressConverter.toEntity(userAddressModel);
        User user = userService.findUserById(userAddressModel.getUserId());
        if (userService.findUserAddressByUserId(user.getId()) != null) {
            throw new DuplicateAddressException("User address already exists");
        }
        userAddress.setUser(user);
        UserAddress createdAddress = userService.saveUserAddress(userAddress);
        return ResponseEntity.status(HttpStatus.CREATED).body(userAddressConverter.toModel(createdAddress));
    }

}
