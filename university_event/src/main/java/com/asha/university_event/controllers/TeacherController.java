package com.asha.university_event.controllers;

import com.asha.university_event.models.Teacher;
import com.asha.university_event.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/V1/teacher")

public class TeacherController {

    @Autowired
    public TeacherService teacherService;

    @PostMapping
    public Teacher post(@RequestBody Teacher teacher) {
        return teacherService.post(teacher);
    }

    @GetMapping
    public List<Teacher> getStudent() {
        return teacherService.getTeacher();
    }

    @GetMapping("/{id}")
    public Optional<Teacher> getById(@PathVariable("id") Integer id) {
        return teacherService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        teacherService.deleteById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Teacher> updateTeacher(@PathVariable("id") int id, @RequestBody Teacher teacherDetail) {
        Teacher updateTeacher = teacherService.updateTeacher(id, teacherDetail);
        if (updateTeacher != null){
            return ResponseEntity.ok(updateTeacher);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}
