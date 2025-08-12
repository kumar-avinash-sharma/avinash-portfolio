import React from 'react';
import avatar from '../assets/avatar.jpeg'; 

const Home = () => {
  return (
    <section 
      id="home" 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '50px 30px', 
        flexWrap: 'wrap' 
      }}
    >
      <div style={{ flex: 1, minWidth: '250px', paddingRight: '15px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>I am Kumar Avinash</h1>
        <p style={{ marginBottom: '10px',paddingRight: '50px' }}>
          A Web Developer actively looking for a new position. I love to explore new technologies 
          and always try to enhance my skills by building useful projects.
        </p>
        <p>
          I am passionate about clean UI, practical web apps, and problem-solving with code.
        </p>
      </div>

      <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
        <img 
          src={avatar} 
          alt="Avatar" 
          style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} 
        />
      </div>
    </section>
  );
};

export default Home;
