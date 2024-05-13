package nl.hva.foryou.api.model;

import nl.hva.foryou.presistence.domain.AddressInfo;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

@Relation(collectionRelation = "_content")
public class UserContactInfoModel extends RepresentationModel<UserContactInfoModel> {

    private String email;

    private String phone;

    private AddressInfo address;

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

    public AddressInfo getAddress() {
        return address;
    }

    public void setAddress(AddressInfo address) {
        this.address = address;
    }
}
