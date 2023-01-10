package com.gerkiu.furnit.service;

import com.gerkiu.furnit.exception.ResourceNotFoundException;
import com.gerkiu.furnit.model.Order;
import com.gerkiu.furnit.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

import javax.validation.Valid;
import javax.validation.constraints.Min;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
    private OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Iterable<Order> getAllOrders() {
        return this.orderRepository.findAll();
    }

    @Override
    public Order create(Order order) {
        order.setDateCreated(LocalDate.now());

        return this.orderRepository.save(order);
    }

    @Override
    public void update(Order order) {
        this.orderRepository.save(order);
    }

    @Override
    public Order getOrder(long id) {
        return orderRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }

    @Override
    public Order replace(@Valid Order newOrder, @Min(value = 1, message = "Invalid order ID.") long id) {
        return orderRepository.findById(id)
            .map(order -> {
                order.setStatus(newOrder.getStatus());
                return orderRepository.save(order);
            })
            .orElseGet(() -> {
                newOrder.setId(id);
                return orderRepository.save(newOrder);
            });
    }
}
