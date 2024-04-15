package nl.hva.foryou.api.converter;

import nl.hva.foryou.api.controller.UserController;
import nl.hva.foryou.api.model.UserModel;
import nl.hva.foryou.presistence.domain.Gender;
import nl.hva.foryou.presistence.domain.User;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;

import java.time.ZonedDateTime;

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
        return model;
    }

    public User toEntity(UserModel model) {
        User entity = new User();
        entity.setFirstName(model.getFirstName());
        entity.setLastName(model.getLastName());
        entity.setLastNameAffix(model.getLastNameAffix());
        entity.setGender(Gender.valueOf(model.getGender()));
        entity.setEmail(model.getEmail());
        entity.setPhone(model.getPhone());
        entity.setPassword(model.getPassword());
        entity.setCreationDate(ZonedDateTime.now());
        return entity;
    }
}
