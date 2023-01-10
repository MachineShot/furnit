package com.gerkiu.furnit.controller;

import com.gerkiu.furnit.dto.OrderItemDto;
import com.gerkiu.furnit.exception.ResourceNotFoundException;
import com.gerkiu.furnit.model.Order;
import com.gerkiu.furnit.model.OrderItem;
import com.gerkiu.furnit.model.OrderStatus;
import com.gerkiu.furnit.service.ItemService;
import com.gerkiu.furnit.service.OrderItemService;
import com.gerkiu.furnit.service.OrderService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    ItemService itemService;
    OrderService orderService;
    OrderItemService orderItemService;

    public OrderController(ItemService itemService, OrderService orderService, OrderItemService orderItemService) {
        this.itemService = itemService;
        this.orderService = orderService;
        this.orderItemService = orderItemService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Order> list() {
        return this.orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Order getOrder(@PathVariable long id) {
        return this.orderService.getOrder(id);
    }

    @PostMapping
    public ResponseEntity<Order> create(@RequestBody OrderForm form) {
        List<OrderItemDto> formDtos = form.getItemOrders();
        validateItemsExistence(formDtos);
        Order order = new Order();
        order.setStatus(OrderStatus.PAID.name());
        order = this.orderService.create(order);

        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemDto dto : formDtos) {
            orderItems.add(orderItemService.create(new OrderItem(order, itemService.getItem(dto
                    .getItem()
                    .getId()), dto.getQuantity())));
        }

        order.setOrderItems(orderItems);

        this.orderService.update(order);

        String uri = ServletUriComponentsBuilder
                .fromCurrentServletMapping()
                .path("/orders/{id}")
                .buildAndExpand(order.getId())
                .toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);

        return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public Order updateOrder(@RequestBody Order order, @PathVariable long id) { return orderService.replace(order, id); }

    private void validateItemsExistence(List<OrderItemDto> orderItems) {
        List<OrderItemDto> list = orderItems
                .stream()
                .filter(op -> Objects.isNull(itemService.getItem(op
                        .getItem()
                        .getId())))
                .collect(Collectors.toList());

        if (!CollectionUtils.isEmpty(list)) {
            new ResourceNotFoundException("Item not found");
        }
    }

    public static class OrderForm {

        private List<OrderItemDto> itemOrders;

        public List<OrderItemDto> getItemOrders() {
            return itemOrders;
        }

        public void setItemOrders(List<OrderItemDto> itemOrders) {
            this.itemOrders = itemOrders;
        }
    }
}
