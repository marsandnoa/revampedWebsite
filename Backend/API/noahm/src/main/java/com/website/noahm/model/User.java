package com.website.noahm.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users") // Optional: specify table name
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // Constructors

    public User() {
        // Default constructor required by JPA
    }

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    // No setter for id since it's auto-generated

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
