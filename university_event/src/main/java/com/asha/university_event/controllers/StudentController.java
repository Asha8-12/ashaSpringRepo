package com.asha.university_event.controllers;

import com.asha.university_event.models.Student;
import com.asha.university_event.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping( "api/V1/student")
public class StudentController {
    @Autowired
    public StudentService studentService;

    @PostMapping
    public Student post(@RequestBody Student student) {
        return studentService.post(student);
    }

    @GetMapping
    public List<Student> getStudent() {
        return studentService.getStudent();
    }
    @GetMapping("/{id}")
    public Optional<Student> getById(@PathVariable("id") Integer id) {
        return studentService.getById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        studentService.deleteById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") int id, @RequestBody Student studentDetail) {
        Student updateStudent = studentService.updateStudent(id, studentDetail);
        if (updateStudent != null){
            return ResponseEntity.ok(updateStudent);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

}
