package nl.hva.foryou.service;

import nl.hva.foryou.api.auth.JwtService;
import nl.hva.foryou.api.controller.UserController;
import nl.hva.foryou.api.model.AuthenticationResponse;
import nl.hva.foryou.api.model.UserAddressModel;
import nl.hva.foryou.api.model.UserModel;
import nl.hva.foryou.api.model.UserSignInModel;
import nl.hva.foryou.exception.DuplicateAddressException;
import nl.hva.foryou.exception.EmailAlreadyExistsException;
import nl.hva.foryou.exception.InvalidEmailException;
import nl.hva.foryou.presistence.domain.User;
import nl.hva.foryou.presistence.domain.UserAddress;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtService jwtService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateAccount() {
        UserModel userModel = new UserModel();
        userModel.setEmail("test@example.com");
        userModel.setPassword("password");

        User user = new User();
        user.setEmail(userModel.getEmail());
        user.setPassword(userModel.getPassword());

        when(userService.findUserByEmail(userModel.getEmail())).thenReturn(null);
        when(userService.isValidEmail(userModel.getEmail())).thenReturn(true);
        when(userService.saveUser(any(User.class))).thenAnswer(invocation -> {
            User savedUser = invocation.getArgument(0);
            savedUser.setId(1L);
            return savedUser;
        });

        String jwtToken = "dummyToken";
        when(jwtService.generateToken(any())).thenReturn(jwtToken);

        AuthenticationResponse response = userController.createAccount(userModel);

        assertNotNull(response);
        assertNotNull(response.getToken());
        assertNotNull(response.getUserId());
    }


    @Test
    void testCreateAccountWithExistingEmail() {
        UserModel userModel = new UserModel();
        userModel.setEmail("test@example.com");

        when(userService.findUserByEmail(userModel.getEmail())).thenReturn(new User());

        assertThrows(EmailAlreadyExistsException.class, () -> {
            userController.createAccount(userModel);
        });
    }

    @Test
    void testCreateAccountWithInvalidEmail() {
        UserModel userModel = new UserModel();
        userModel.setEmail("invalidemail");

        when(userService.isValidEmail(userModel.getEmail())).thenReturn(false);

        assertThrows(InvalidEmailException.class, () -> {
            userController.createAccount(userModel);
        });
    }

    @Test
    void testCreateAddress() {
        UserAddressModel addressModel = new UserAddressModel();
        addressModel.setUserId(1L);

        User user = new User();
        user.setId(1L);

        UserAddress userAddress = new UserAddress();
        userAddress.setUser(user);

        when(userService.findUserById(1L)).thenReturn(user);
        when(userService.findUserAddressByUserId(1L)).thenReturn(null);
        when(userService.saveUserAddress(any(UserAddress.class))).thenReturn(userAddress);

        ResponseEntity<UserAddressModel> responseEntity = userController.createAddress(addressModel);

        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
    }

    @Test
    void testCreateAddressWithExistingAddress() {
        UserAddressModel addressModel = new UserAddressModel();
        addressModel.setUserId(1L);

        User user = new User();
        user.setId(1L);

        UserAddress existingAddress = new UserAddress();
        existingAddress.setUser(user);

        when(userService.findUserById(addressModel.getUserId())).thenReturn(user);
        when(userService.findUserAddressByUserId(user.getId())).thenReturn(existingAddress);

        assertThrows(DuplicateAddressException.class, () -> {
            userController.createAddress(addressModel);
        });
    }


    @Test
    void testSignIn() {
        UserSignInModel signInModel = new UserSignInModel();
        signInModel.setEmail("test@example.com");
        signInModel.setPassword("password");

        User user = new User();
        user.setId(1L);
        user.setEmail(signInModel.getEmail());
        user.setPassword(signInModel.getPassword());

        when(userService.findUserByEmail(signInModel.getEmail())).thenReturn(user);
        when(authenticationManager.authenticate(any())).thenReturn(null);

        ResponseEntity<?> responseEntity = userController.signIn(signInModel);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
    }

    @Test
    void testSignInWithInvalidCredentials() {
        UserSignInModel signInModel = new UserSignInModel();
        signInModel.setEmail("test@example.com");
        signInModel.setPassword("password");

        when(userService.findUserByEmail(signInModel.getEmail())).thenReturn(null);
        when(authenticationManager.authenticate(any())).thenThrow(new BadCredentialsException("Invalid credentials"));

        ResponseEntity<?> responseEntity = userController.signIn(signInModel);

        assertEquals(HttpStatus.UNAUTHORIZED, responseEntity.getStatusCode());
        assertNotNull(responseEntity.getBody());
    }
}
