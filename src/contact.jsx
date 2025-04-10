/*
// Student Name: Jorlin Roy
// Student ID: 301240499
 Date: 7 OCT 2024*/
import React from 'react';
import './Contact.css'; 
import { FaEnvelope, FaPhone, FaTwitter, FaGithub } from 'react-icons/fa'; 

export default function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Me</h1>
        <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul className="contact-list">
          <li>
            <FaEnvelope className="contact-icon" />
            <strong>Email:</strong>
            <a href="mailto:jorlinroy@gmail.com"> jorlinroy@gmail.com</a>
          </li>
          <li>
            <FaPhone className="contact-icon" />
            <strong>Phone:</strong>
            <a href="tel:+16478797965"> 647-879-7965</a>
          </li>
          <li>
            <FaTwitter className="contact-icon" />
            <strong>Twitter:</strong>
            <a href="https://x.com/jorlin_roy?t=35STXkZo7EwyfYqJl5EBPQ&s=09" target="_blank" rel="noopener noreferrer"> @jorlin_roy</a>
          </li>
         
        </ul>
      </section>
    </div>
  );
}
