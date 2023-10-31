import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AbForm.css'
const AbForm = () => {
  return (
    
    <Accordion className='container Main '   >
      <div className='main-hadding text-center'>
        <h2>ABOUT US</h2>
      </div>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Mission</b></Accordion.Header>
        <Accordion.Body>
        At <b>FOLIO</b>, our mission is to briefly describe the primary purpose of your organization or business. We are dedicated to mention your key objectives, such as providing exceptional products/services, solving specific problems, or making a positive impact on society. Through unwavering commitment, innovation, and a relentless pursuit of excellence, we strive to outline how your mission benefits your target audience or the broader community.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Vision</b></Accordion.Header>
        <Accordion.Body>
        Our vision at <b>FOLIO</b> is to paint a compelling picture of your desired future state. We aspire to be describe the position or role you aim to achieve in your industry or community. We envision a world where highlight the positive change or impact you aim to create. To realize this vision, we will briefly mention the strategies or approaches you will use to achieve your vision.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Dream</b></Accordion.Header>
        <Accordion.Body>
        At <b>FOLIO</b>, we dare to dream beyond limits. Our dream is to express an audacious and inspirational goal that stretches the boundaries of what is possible. We envision a future where describe the ideal scenario or outcome that aligns with your dream. This dream fuels our passion, ignites innovation, and drives us to push boundaries every day.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Our Value</b></Accordion.Header>
        <Accordion.Body>
        <b>Integrity:</b> We uphold the highest standards of honesty, ethics, and transparency in all our actions and decisions. Integrity is the foundation of trust, which we value deeply.
        <br/>

<b>Excellence:</b> We relentlessly pursue excellence in everything we do. We strive for continuous improvement, setting the bar high and exceeding expectations.
<br/>

<b>Innovation:</b> We embrace change and innovation as catalysts for progress. We encourage creativity, adaptability, and the courage to explore new frontiers.
        <br/>
<b>Customer-Centric:</b> Our customers are at the heart of our business. We are committed to understanding their needs, delivering exceptional value, and building lasting relationships.
        <br/>
<b>Collaboration:</b> We believe in the power of collaboration. We foster a culture of teamwork, respect diverse perspectives, and work together to achieve common goals.
        <br/>
<b>Sustainability:</b> We are dedicated to environmental and social responsibility. We aim to minimize our environmental footprint and contribute positively to the communities we serve.
        <br/>
<b>Empowerment:</b> We empower our employees to reach their full potential. We value diversity and inclusion and provide opportunities for growth, learning, and leadership.
        <br/>
These statements collectively define our purpose, guide our actions, and inspire us to make a meaningful impact in the world. They serve as the compass that directs our organization toward a brighter future and reflects our commitment to our stakeholders, our employees, and society at large.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

export default AbForm
