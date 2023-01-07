package com.gerkiu.furnit.controller;

import com.gerkiu.furnit.model.Item;
import com.gerkiu.furnit.service.ItemService;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Item> getItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/{id}")
    public Item getItem(@PathVariable long id) { return itemService.getItem(id); }

    @PostMapping()
    public Item newItem(@RequestBody Item item) { return itemService.save(item); }

    @PutMapping("/{id}")
    public Item replaceItem(@RequestBody Item item, @PathVariable long id) { return itemService.replace(item, id); }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable long id) { itemService.delete(id); }
}
