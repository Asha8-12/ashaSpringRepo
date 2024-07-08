import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ViewEvent.css';

const ViewEvent = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch the event details
        axios.get(`http://localhost:8080/api/v1/event/${id}`)

            .then(response => {
                setEvent(response.data);
            })
            .catch(error => {
                console.error('Error fetching event details:', error);
                setErrorMessage('Failed to load event details.');
            });
    }, [id]);

    if (errorMessage) {
        return <p className="error-message">{errorMessage}</p>;
    }

    if (!event) {
        return <p>Loading event details...</p>;
    }

    return (
        <div className="event-details-container">
            <h2>{event.title}</h2>
            <div className="event-info">
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Description:</strong> {event.description}</p>
            </div>
            <Link to="/Main/event" className="btn btn-primary">Back to Events</Link>
        </div>
    );
};

export default ViewEvent;