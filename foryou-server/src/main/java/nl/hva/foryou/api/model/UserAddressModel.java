package nl.hva.foryou.api.model;

import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

@Relation(collectionRelation = "_content")
public class UserAddressModel extends RepresentationModel<UserAddressModel> {

    private Long userId;

    private String street;

    private String houseNumber;

    private String houseNumberSuffix;

    private String postalCode;

    private String city;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getHouseNumberSuffix() {
        return houseNumberSuffix;
    }

    public void setHouseNumberSuffix(String houseNumberSuffix) {
        this.houseNumberSuffix = houseNumberSuffix;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
