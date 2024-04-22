package nl.hva.foryou.api.model;

import org.springframework.hateoas.server.core.Relation;

@Relation(collectionRelation = "_content")
public class ContactInfoModel {

    private UserAddressModel address;

    private String email;

    private String phone;

    public UserAddressModel getAddress() {
        return address;
    }

    public void setAddress(UserAddressModel address) {
        this.address = address;
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
}
