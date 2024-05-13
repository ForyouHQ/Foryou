package nl.hva.foryou.presistence.domain.task;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import nl.hva.foryou.presistence.domain.AddressInfo;
import nl.hva.foryou.presistence.domain.BaseJpaEntity;

@Entity
public class TaskContactInfo extends BaseJpaEntity {

    @OneToOne(optional = false, fetch = FetchType.LAZY)
    private Task task;

    @Email
    private String email;

    private String phone;

    @Embedded
    private AddressInfo addressInfo;

    public AddressInfo getAddressInfo() {
        return addressInfo;
    }

    public void setAddressInfo(AddressInfo addressInfo) {
        this.addressInfo = addressInfo;
    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
