package com.gerkiu.furnit.controller;

import com.gerkiu.furnit.model.Item;
import com.gerkiu.furnit.repository.ItemRepository;
import com.gerkiu.furnit.service.ItemService;

import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private ItemService itemService;
    private final ItemRepository repository;

    public ItemController(ItemService itemService, ItemRepository repository) {
        this.itemService = itemService;
        this.repository = repository;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Item> getItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/{id}")
    public Item getItem(@PathVariable long id) { return itemService.getItem(id); }

    @PostMapping()
    public Item newItem(@RequestBody Item item) { return itemService.save(item); }

    @PatchMapping("/{id}")
    public Item replaceItem(@RequestBody Item item, @PathVariable long id) { return itemService.replace(item, id); }

    @DeleteMapping(value = { "/{id}", "/{id}/" })
    void deleteEmployee(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
