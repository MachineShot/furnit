package com.gerkiu.furnit;

import com.gerkiu.furnit.model.Item;
import com.gerkiu.furnit.service.ItemService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FurnitApplication {

	public static void main(String[] args) {
		SpringApplication.run(FurnitApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ItemService itemService) {
		return args -> {
			itemService.save(new Item(1L, "TV Table", 300.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/tv-table.jpg"));
			itemService.save(new Item(2L, "Coffee Table", 200.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/coffee-table.jpg"));
			itemService.save(new Item(3L, "Sofa", 600.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/sofa.jpg"));
			itemService.save(new Item(4L, "Chair", 100.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/chair.jpg"));
			itemService.save(new Item(5L, "Pillow", 10.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/pillow.jpg"));
			itemService.save(new Item(6L, "Shelf", 80.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/shelf.jpg"));
			itemService.save(new Item(7L, "Hanger", 15.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/hanger.jpg"));
			itemService.save(new Item(8L, "Vase", 20.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/vase.jpg"));
			itemService.save(new Item(9L, "Carpet", 150.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/carpet.jpg"));
			itemService.save(new Item(10L, "Ottoman", 220.00, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a turpis lectus. Sed ultricies tellus nec ligula consectetur, nec fringilla eros aliquet. Phasellus non volutpat elit.", "https://ialhairi.sirv.com/Images/ottoman.jpg"));
		};
	}
}