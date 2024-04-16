package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.UserController;
import nl.hva.foryou.api.model.UserAddressModel;
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
        model.setStreet(entity.getStreet());
        model.setHouseNumber(entity.getHouseNumber());
        model.setHouseNumberSuffix(entity.getHouseNumberSuffix());
        model.setPostalCode(entity.getPostalCode());
        model.setCity(entity.getCity());
        return model;
    }

    public UserAddress toEntity(UserAddressModel model) {
        UserAddress entity = new UserAddress();
        entity.setStreet(model.getStreet());
        entity.setHouseNumber(model.getHouseNumber());
        entity.setHouseNumberSuffix(model.getHouseNumberSuffix());
        entity.setPostalCode(model.getPostalCode());
        entity.setCity(model.getCity());
        return entity;
    }
}
