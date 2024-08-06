package com.example.demo.controller;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<Cart> getAllItems() {
        return cartService.getAllItems();
    }

    @PostMapping
    public Cart addItem(@RequestBody Cart cart) {
        return cartService.addItem(cart);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateItem(@PathVariable Long id, @RequestBody Cart cartDetails) {
        Cart updatedCart = cartService.updateItem(id, cartDetails);
        return ResponseEntity.ok(updatedCart);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        cartService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
