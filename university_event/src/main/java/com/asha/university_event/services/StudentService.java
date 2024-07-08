package com.asha.university_event.services;

import com.asha.university_event.models.Student;
import com.asha.university_event.repositories.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    public StudentRepo studentRepo;

    public Student post(Student student) {
        return studentRepo.save(student);
    }

    public List<Student> getStudent() {
        return studentRepo.findAll();
    }

    public Optional<Student> getById(Integer id) {
        return studentRepo.findById(id);
    }

    public void deleteById(Integer id) {
        studentRepo.deleteById(id);
    }
    public Student updateStudent(int id, Student studentDetail) {
        Optional<Student> optionalStudent = studentRepo.findById(id);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setName(studentDetail.getName());
            student.setPhoneNumber(studentDetail.getPhoneNumber());
            student.setCourse(studentDetail.getCourse());
            student.setEmail(studentDetail.getEmail());
            student.setPassword(studentDetail.getPassword());
            return studentRepo.save(student);
        } else {
            return null;
        }
    }

}