package nl.hva.foryou.api.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class GlobalConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**") // Adjust the mapping pattern to match your API endpoints
                .allowedOrigins("*") // Add the origins allowed to access your API
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Add the HTTP methods allowed
                .allowedHeaders("*"); // Add the headers allowed in the request
    }
}