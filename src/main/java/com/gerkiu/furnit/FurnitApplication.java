package com.gerkiu.furnit;

import com.gerkiu.furnit.model.Item;
import com.gerkiu.furnit.service.ItemService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FurnitApplication {

	public static void main(String[] args) {
		SpringApplication.run(FurnitApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ItemService itemService) {
		return args -> {
			itemService.save(new Item(1L, "TV Set", 300.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://via.placeholder.com/200x100"));
			itemService.save(new Item(2L, "Game Console", 200.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://via.placeholder.com/200x100"));
			itemService.save(new Item(3L, "Sofa", 100.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://via.placeholder.com/200x100"));
			itemService.save(new Item(4L, "Icecream", 5.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://via.placeholder.com/200x100"));
			itemService.save(new Item(5L, "Beer", 3.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://via.placeholder.com/200x100"));
			itemService.save(new Item(6L, "Phone", 500.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://via.placeholder.com/200x100"));
			itemService.save(new Item(7L, "Watch", 30.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://via.placeholder.com/200x100"));
		};
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:3000");
			}
		};
	}
}