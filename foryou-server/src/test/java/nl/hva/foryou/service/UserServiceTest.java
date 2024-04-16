package nl.hva.foryou.service;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.InjectMocks;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @ParameterizedTest
    @ValueSource(strings = {
            "test@example.com",  // Valid email
            "",                  // Empty email
            "invalidemail",      // Invalid format
            "username@",         // Missing domain
            "username@example"   // Missing top-level domain
    })
    void testIsValidEmail(String email) {
        boolean isValid = userService.isValidEmail(email);

        switch (email) {
            case "test@example.com":
                assertTrue(isValid); // Expect true for valid email
                break;
            case "":
            case "invalidemail":
            case "username@":
            case "username@example":
                assertFalse(isValid); // Expect false for invalid email formats
                break;
        }
    }
}
