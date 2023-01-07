package com.gerkiu.furnit.service;

import com.gerkiu.furnit.model.Item;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ItemService {

    @NotNull Iterable<Item> getAllItems();

    Item getItem(@Min(value = 1L, message = "Invalid item ID.") long id);

    Item save(Item item);

    Item replace(Item newItem, @Min(value = 1L, message = "Invalid item ID.") long id);

    void delete(@Min(value = 1L, message = "Invalid item ID.") long id);
}
