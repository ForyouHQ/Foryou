package nl.hva.foryou.presistence.domain;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;

@Entity
public class UserAddress extends BaseJpaEntity {

    @OneToOne(optional = false, fetch = FetchType.LAZY)
    private User user;

    @Embedded
    private AddressInfo addressInfo;

    public AddressInfo getAddressInfo() {
        return addressInfo;
    }

    public void setAddressInfo(AddressInfo addressInfo) {
        this.addressInfo = addressInfo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
