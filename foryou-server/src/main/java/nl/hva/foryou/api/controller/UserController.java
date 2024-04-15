package nl.hva.foryou.api.controller;

import org.springframework.hateoas.MediaTypes;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/users", produces = MediaTypes.HAL_JSON_VALUE)
public class UserController {
}
