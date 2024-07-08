package com.asha.university_event.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor

@Entity
@Data

public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int Id;
    private String title;
    private String date;
    private String time;
    private String location;
    private String description;
}
