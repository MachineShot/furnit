package com.gerkiu.furnit.dto;

import com.gerkiu.furnit.model.Item;

public class OrderItemDto {
    private Item item;
    private Integer quantity;

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
