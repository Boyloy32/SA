package com.learning.ComputerShop.service;

import com.learning.ComputerShop.entity.Users;
import com.learning.ComputerShop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Users createUser(Users users){
        return userRepository.save(users);
    }

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    public Optional<Users> getUserById(Long id){
        return userRepository.findById(id);
    }

    public Users updateUser(Long id, Users updatedUsers) throws Exception {
        if (!userRepository.existsById(id)) {
            throw new Exception("User with ID " + id + " not found");
        }
        updatedUsers.setId(id);
        return userRepository.save(updatedUsers);
    }

    public void deleteUser(Long id) throws Exception {
        if (!userRepository.existsById(id)) {
            throw new Exception("User with ID " + id + " not found");
        }
         userRepository.deleteById(id);
    }
}
