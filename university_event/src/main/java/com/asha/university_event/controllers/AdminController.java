package com.asha.university_event.controllers;

import com.asha.university_event.models.Admin;
import com.asha.university_event.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/V1/admin")

public class AdminController {
    @Autowired
    public AdminService adminService;

    @PostMapping
    public Admin post(@RequestBody Admin admin) {
        return adminService.post(admin);
    }

    @GetMapping
    public List<Admin> getAdmin() {
        return adminService.getAdmin();
    }

    @GetMapping("/{id}")
    public Optional<Admin> getById(@PathVariable("id") Integer id) {
        return adminService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        adminService.deleteById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable("id") int id, @RequestBody Admin adminDetails) {
        Admin updateAdmin = adminService.updateAdmin(id, adminDetails);
        if (updateAdmin != null){
            return ResponseEntity.ok(updateAdmin);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}