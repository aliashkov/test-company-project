import React, { useState } from 'react';
import './service.css';
import data from "../dataService.json";

const Service = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (id) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  const getLinkDetails = (id) => {
    switch (id) {
      case '1':
        return { text: 'Link Hitz.me', url: 'https://hitz.me/' };
      case '2':
        return { text: 'Link Amped Web', url: 'https://app.ampedstudio.com/' };
      case '3':
        return { text: 'Link Amped Studio', url: 'https://ampedstudio.com/' };
      default:
        return null;
    }
  };

  return (
    <div className='service-container' id="service">
      <div className='service-container'>
        <h2>Our services</h2>
        <svg className='svg-services' width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke="  #88cdf4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* <div className='cards'>
        {data.map(service => (
          <div
            key={service.id}
            className={`card ${activeCard === service.id ? 'active' : ''}`}
            onMouseEnter={() => handleCardHover(service.id)}
            onMouseLeave={handleCardLeave}
          >
            <img src={service.image} alt={service.title} className='img-card' />
            <p className='card-name'>{service.title}</p>

            {activeCard === service.id && (
              <div className='card-info'>
                <p className='description'>{service.description}</p>
                <p className='description'>{service.descriptionn}</p>
                <a className='link-service' href='#' target='blank'>
                <button className='btn-service'>CHOOSE</button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div> */}
      <div className='cards'>
        {data.map(service => {
          const linkDetails = getLinkDetails(service.id);

          return (
            <div
              key={service.id}
              className={`card ${activeCard === service.id ? 'active' : ''}`}
              onMouseEnter={() => handleCardHover(service.id)}
              onMouseLeave={handleCardLeave}
            >
              <img src={service.image} alt={service.title} className='img-card' />
              <p className='card-name'>{service.title}</p>

              {activeCard === service.id && (
                <div className='card-info'>
                  <p className='description'>{service.description}</p>
                  <p className='description'>{service.descriptionn}</p>
                  {linkDetails && (
                    <a className='link-service' href={linkDetails.url} target='_blank' rel='noopener noreferrer'>
                      <button className='btn-service'>{linkDetails.text}</button>
                      
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;








