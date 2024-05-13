package nl.hva.foryou.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import nl.hva.foryou.presistence.domain.AddressInfo;
import org.springframework.hateoas.Links;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

@Relation(collectionRelation = "_content")
public class UserAddressModel extends RepresentationModel<UserAddressModel> {

    private Long userId;

    private AddressInfo address;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public AddressInfo getAddress() {
        return address;
    }

    public void setAddress(AddressInfo address) {
        this.address = address;
    }

    @JsonIgnore
    @Override
    public Links getLinks() {
        return super.getLinks();
    }
}
