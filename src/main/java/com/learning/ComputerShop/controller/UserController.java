package com.learning.ComputerShop.controller;

import com.learning.ComputerShop.entity.Product;
import com.learning.ComputerShop.entity.Users;
import com.learning.ComputerShop.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public Users createUser(@RequestBody Users users){
        return userService.createUser(users);
    }

    @GetMapping("/users")
    public List<Users> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        Optional<Users> product = userService.getUserById(id);
        return product.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) throws Exception {
        userService.deleteUser(id);
        return ResponseEntity.accepted().build();
    }
}
