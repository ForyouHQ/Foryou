package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.UserController;
import nl.hva.foryou.api.model.UserAddressModel;
import nl.hva.foryou.presistence.domain.AddressInfo;
import nl.hva.foryou.presistence.domain.UserAddress;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

public class UserAddressConverter extends RepresentationModelAssemblerSupport<UserAddress, UserAddressModel> {

    public UserAddressConverter() {
        super(UserController.class, UserAddressModel.class);
    }

    @Override
    public UserAddressModel toModel(UserAddress entity) {
        UserAddressModel model = new UserAddressModel();
        model.setUserId(entity.getUser().getId());
        model.setAddress(entity.getAddressInfo());
        return model;
    }

    public UserAddress toEntity(UserAddressModel model) {
        UserAddress entity = new UserAddress();
        entity.setAddressInfo(model.getAddress());
        return entity;
    }
}
