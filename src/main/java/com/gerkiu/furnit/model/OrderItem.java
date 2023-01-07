package com.gerkiu.furnit.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Transient;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class OrderItem {
    @EmbeddedId
    @JsonIgnore
    private OrderItemPK pk;

    @Column(nullable = false)
    private Integer quantity;

    public OrderItem() {
        super();
    }

    public OrderItem(Order order, Item item, Integer quantity) {
        pk = new OrderItemPK();
        pk.setOrder(order);
        pk.setItem(item);
        this.quantity = quantity;
    }

    @Transient
    public Item getItem() {
        return this.pk.getItem();
    }

    @Transient
    public Double getTotalPrice() {
        return getItem().getPrice() * getQuantity();
    }

    public OrderItemPK getPk() {
        return pk;
    }

    public void setPk(OrderItemPK pk) {
        this.pk = pk;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderItem that = (OrderItem) o;
        return Objects.equals(pk, that.pk) && Objects.equals(quantity, that.quantity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pk, quantity);
    }
}
