package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.UserController;
import nl.hva.foryou.api.model.UserModel;
import nl.hva.foryou.presistence.domain.User;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

public class UserConverter extends RepresentationModelAssemblerSupport<User, UserModel> {

    public UserConverter() {
        super(UserController.class, UserModel.class);
    }

    @Override
    public UserModel toModel(User entity) {
        UserModel model = new UserModel();
        model.setFirstName(entity.getFirstName());
        model.setLastName(entity.getLastName());
        model.setLastNameAffix(entity.getLastNameAffix());
        model.setGender(entity.getGender().toString());
        model.setEmail(entity.getEmail());
        model.setPhone(entity.getPhone());
        model.setPassword(entity.getPassword());
        model.setCreationDate(entity.getCreationDate());
        return model;
    }
}
