package com.website.noahm.service;

import java.util.List;
import java.util.Optional;

import com.website.noahm.model.User;

public interface UserService {

    User saveUser(User user);

    Optional<User> getUserById(Long id);

    List<User> getAllUsers();

    User updateUser(Long id, User user);

    void deleteUser(Long id);
}