import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EventPage.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    setIsLoading(true);
    axios.get('http://localhost:8080/api/v1/event')
      .then(response => {
        setEvents(response.data);
        console.log(response.data)
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching event data:', error);
        setIsLoading(false);
      });
  };

  const handleAddEvent = () => {
    navigate('/Main/upload_event');
  };

  const handleUpdateEvent = (id) => {
    navigate(`/Main/upload_event/${id}`);
  };

  const handleDeleteEvent = (id) => {
    axios.delete(`http://localhost:8080/api/v1/event/${id}`)
      .then(response => {
        setEvents(events.filter(event => event.id !== id));
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  return (
    <div className="event-table-container">
      <h2>Event List</h2>
      <button className="add-event" onClick={handleAddEvent}>Upload event</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="event-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td>
                  <button onClick={() => handleUpdateEvent(event.id)}>Update</button>
                  <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventList;
