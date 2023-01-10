package com.gerkiu.furnit.service;

import com.gerkiu.furnit.model.OrderItem;
import javax.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;

@Validated
public interface OrderItemService {
    OrderItem create(@NotNull(message = "The items for order cannot be null.") @Valid OrderItem orderItem);
}
