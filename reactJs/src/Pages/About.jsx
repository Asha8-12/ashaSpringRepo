// About.js
import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to the University Event Dashboard! Our mission is to keep you informed about all the latest events happening on campus. Whether it's academic seminars, sports events, cultural festivals, or club meetings, we've got you covered.
            </p>
            <section className="about-section">
                <h2>Our Vision</h2>
                <p>
                    To create a vibrant and connected campus community by providing a centralized platform for event information.
                </p>
            </section>
            <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                    To enhance student engagement and participation in campus activities by offering a comprehensive and user-friendly event dashboard.
                </p>
            </section>
        </div>
    );
}

export default About;
