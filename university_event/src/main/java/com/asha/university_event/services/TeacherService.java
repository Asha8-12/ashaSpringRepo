package com.asha.university_event.services;

import com.asha.university_event.models.Teacher;
import com.asha.university_event.repositories.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    public TeacherRepo teacherRepo;

    public Teacher post(Teacher teacher) {
        return teacherRepo.save(teacher);
    }

    public List<Teacher> getTeacher() {
        return teacherRepo.findAll();
    }

    public Optional<Teacher> getById(Integer id) {
        return teacherRepo.findById(id);
    }

    public void deleteById(Integer id) {
        teacherRepo.deleteById(id);
    }

    public Teacher updateTeacher(int id, Teacher teacherDetail) {
        Optional<Teacher> optionalTeacher = teacherRepo.findById(id);
        if (optionalTeacher.isPresent()) {
            Teacher teacher = optionalTeacher.get();
            teacher.setName(teacherDetail.getName());
            teacher.setEmail(teacherDetail.getEmail());
            teacher.setAddress(teacherDetail.getAddress());
            teacher.setPassword(teacherDetail.getPassword());
            return teacherRepo.save(teacher);
        } else {
            return null;
        }
    }
}
