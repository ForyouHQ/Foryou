package nl.hva.foryou.presistence.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.time.ZonedDateTime;

@Entity
public class User extends BaseJpaEntity {

    @NotBlank
    private String firstName;

    private String lastNameAffix;

    @NotBlank
    private String lastName;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Gender gender = Gender.OTHER;

    @Column(unique = true)
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n")
    private String email;

    private String phone;

    @NotBlank
    private String password;

    @NotNull
    private ZonedDateTime creationDate = ZonedDateTime.now();

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastNameAffix() {
        return lastNameAffix;
    }

    public void setLastNameAffix(String lastNameAffix) {
        this.lastNameAffix = lastNameAffix;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ZonedDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(ZonedDateTime creationDate) {
        this.creationDate = creationDate;
    }
}
