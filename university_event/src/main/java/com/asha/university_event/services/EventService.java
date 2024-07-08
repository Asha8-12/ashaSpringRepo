package com.asha.university_event.services;

import com.asha.university_event.models.Event;
import com.asha.university_event.repositories.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    public EventRepo eventRepo;

    public Event post (Event event){
        return eventRepo.save(event);
    }

    public List<Event> getEvent() {
        return eventRepo.findAll();
    }

    public Optional<Event> getById(Integer id){
        return eventRepo.findById(id);
    }

    public void deleteById(Integer id){
        eventRepo.deleteById(id);
    }

    public Event updateEvent(int id, Event eventDetail){
        Optional<Event> optionalEvent = eventRepo.findById(id);
        if (optionalEvent.isPresent()){
            Event event = optionalEvent.get();
            event.setTitle(eventDetail.getTitle());
            event.setDate(eventDetail.getDate());
            event.setLocation(eventDetail.getLocation());
            return eventRepo.save(event);
        }
        else {
            return null;

        }
    }


}
