import React from 'react';
import linkedin from '../assets/linkedin.png'; // You can use any icon or URL
import github from '../assets/github.png';
import email from '../assets/email.jpeg';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: kumaravinash302005@gmail.com</p>
      <p>Phone: +91 9304793312</p>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/kumar-avinash-1a8365325/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/kumar-avinash-sharma" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="mailto:kumaravinash302005@gmail.com">
          <img src={email} alt="Email" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
