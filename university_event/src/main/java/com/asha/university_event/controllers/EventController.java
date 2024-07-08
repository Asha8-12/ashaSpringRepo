package com.asha.university_event.controllers;

import com.asha.university_event.models.Event;
import com.asha.university_event.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:300")
@RequestMapping("api/v1/event")

public class EventController {

        @Autowired
        public EventService eventService;

        @PostMapping
        public Event post(@RequestBody Event event) {
            return eventService.post(event);
        }

        @GetMapping
        public List<Event> getEvent() {
            return eventService.getEvent();
        }

        @GetMapping("/{id}")
        public Optional<Event> getById(@PathVariable("id") Integer id) {
            return eventService.getById(id);
        }

        @DeleteMapping("/{id}")
        public void deleteById(@PathVariable("id") Integer id) {
            eventService.deleteById(id);
        }

        @PutMapping("/{id}")
        public ResponseEntity<Event> updateEvent(@PathVariable("id") int id, @RequestBody Event eventDetails) {
            Event updateEvent = eventService.updateEvent(id, eventDetails);
            if (updateEvent != null){
                return ResponseEntity.ok(updateEvent);
            }
            else{
                return ResponseEntity.notFound().build();
            }
        }
    }

