package com.gerkiu.furnit.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Item name is required")
    @Basic(optional = false)
    private String name;

    private Double price;
    private String description;

    private String pictureUrl;

    public Item(Long id, @NotNull(message = "Item name is required.") String name, Double price, String description, String pictureUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.pictureUrl = pictureUrl;
    }

    public Item() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }
}
