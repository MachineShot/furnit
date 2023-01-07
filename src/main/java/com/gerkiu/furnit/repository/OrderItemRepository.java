package com.gerkiu.furnit.repository;

import com.gerkiu.furnit.model.OrderItem;
import com.gerkiu.furnit.model.OrderItemPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, OrderItemPK> {
}