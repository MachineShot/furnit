package com.gerkiu.furnit.service;

import com.gerkiu.furnit.exception.ResourceNotFoundException;
import com.gerkiu.furnit.model.Item;
import com.gerkiu.furnit.repository.ItemRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ItemServiceImpl implements ItemService {
    private ItemRepository itemRepository;

    public ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public Iterable<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item getItem(long id) {
        return itemRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found"));
    }

    @Override
    public Item save(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Item replace(Item newItem, long id) {
        return itemRepository.findById(id)
            .map(item -> {
                item.setName(newItem.getName());
                item.setDescription(newItem.getDescription());
                item.setPrice(newItem.getPrice());
                item.setPictureUrl(newItem.getPictureUrl());
                return itemRepository.save(item);
            })
            .orElseGet(() -> {
                newItem.setId(id);
                return itemRepository.save(newItem);
            });
    }

    @Override
    public void delete(long id) {
        itemRepository.deleteById(id);
    }
}
