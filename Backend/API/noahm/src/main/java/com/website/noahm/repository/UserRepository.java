package com.website.noahm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.website.noahm.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Additional query methods can be defined here
}
