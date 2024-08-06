package com.example.demo.service;



import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getAllItems() {
        return cartRepository.findAll();
    }

    public Cart addItem(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart updateItem(Long id, Cart cartDetails) {
        Cart cart = cartRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
        cart.setProductName(cartDetails.getProductName());
        cart.setQuantity(cartDetails.getQuantity());
        cart.setPrice(cartDetails.getPrice());
        return cartRepository.save(cart);
    }

    public void deleteItem(Long id) {
        Cart cart = cartRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
        cartRepository.delete(cart);
    }
}
