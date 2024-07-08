import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UploadEvent.css';

const EventForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        description: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (id) {
            // Fetch existing event data if id is present
            axios.get(`http://localhost:8080/api/v1/event/${id}`)
                .then(response => {
                    setEvent(response.data);
                })
                .catch(error => {
                    console.error('Error fetching event data:', error);
                    setErrorMessage('Failed to load event data.');
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form data
        if (!event.title || !event.date || !event.time || !event.location || !event.description) {
            setErrorMessage('All fields are required.');
            return;
        }

        try {
            if (id) {
                // Update existing event
                await axios.put(`http://localhost:8080/api/v1/event/${id}`, event, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            } else {
                // Create new event
                await axios.post(`http://localhost:8080/api/v1/event`, event, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }

            // Redirect to event list after successful operation
            navigate('/Main/event');
        } catch (error) {
            console.error('Error submitting event:', error);
            setErrorMessage('Failed to submit event. Please check your input and try again.');
        }
    };

    return (
        <div className="event-form-container">
            <h2>{id ? 'Update Event' : 'Add Event'}</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Event Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={event.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="btn btn-success">{id ? 'Update' : 'Add'}</button>
                    <button type="button" className="btn btn-danger" onClick={() => navigate('/Main/event')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
