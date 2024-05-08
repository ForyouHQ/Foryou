package nl.hva.foryou.api.controller;

import nl.hva.foryou.api.converter.UserAddressConverter;
import nl.hva.foryou.api.converter.UserConverter;
import nl.hva.foryou.api.model.*;
import nl.hva.foryou.api.auth.JwtService;
import nl.hva.foryou.exception.DuplicateAddressException;
import nl.hva.foryou.exception.EmailAlreadyExistsException;
import nl.hva.foryou.exception.InvalidEmailException;
import nl.hva.foryou.exception.UserNotFoundException;
import nl.hva.foryou.presistence.domain.User;
import nl.hva.foryou.presistence.domain.UserAddress;
import nl.hva.foryou.service.UserService;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/auth", produces = MediaTypes.HAL_JSON_VALUE)
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;
    private final UserConverter userConverter;
    private final UserAddressConverter userAddressConverter = new UserAddressConverter();
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public UserController(UserService userService, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.userConverter = new UserConverter(passwordEncoder);
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public AuthenticationResponse createAccount(@RequestBody UserModel userModel) {
        User user = userConverter.toEntity(userModel);
        if (userService.findUserByEmail(userModel.getEmail()) != null) throw new EmailAlreadyExistsException("Email address already exists");
        if (!userService.isValidEmail(userModel.getEmail())) throw new InvalidEmailException("Invalid email address");
        user = userService.saveUser(user);
        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .userId(user.getId())
                .build();
    }

    @PostMapping("/address")
    public ResponseEntity<UserAddressModel> createAddress(@RequestBody UserAddressModel userAddressModel) {
        UserAddress userAddress = userAddressConverter.toEntity(userAddressModel);
        User user = userService.findUserById(userAddressModel.getUserId());
        if (userService.findUserAddressByUserId(user.getId()) != null) throw new DuplicateAddressException("User address already exists");
        userAddress.setUser(user);
        UserAddress createdAddress = userService.saveUserAddress(userAddress);
        return ResponseEntity.status(HttpStatus.CREATED).body(userAddressConverter.toModel(createdAddress));
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> signIn(@RequestBody UserSignInModel userSignInModel) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userSignInModel.getEmail(), userSignInModel.getPassword()));
            User user = userService.findUserByEmail(userSignInModel.getEmail());
            String jwtToken = jwtService.generateToken(user);
            return ResponseEntity.ok(AuthenticationResponse.builder()
                            .token(jwtToken)
                            .userId(user.getId())
                            .build());
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @GetMapping(path = "/contactInfo/{userId}")
    public ResponseEntity<ContactInfoModel> getUserContactInfo(@PathVariable Long userId) {
        UserAddress userAddress = userService.findUserAddressByUserId(userId);
        if (userAddress == null) {
            throw new UserNotFoundException(userId);
        }
        User user = userService.findUserById(userId);
        if (user == null) {
            throw new UserNotFoundException(userId);
        }
        ContactInfoModel contactInfoModel = new ContactInfoModel();
        contactInfoModel.setAddress(userAddressConverter.toModel(userAddress));
        contactInfoModel.setPhone(user.getPhone());
        contactInfoModel.setEmail(user.getEmail());

        return ResponseEntity.ok(contactInfoModel);
    }
}