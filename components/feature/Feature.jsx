import React from 'react';
import './feature.css';

const Feature = ({ title }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title mr-6">
      <div />
      <h1 className='text-start '>{title}</h1>
    </div>
    

  </div>
);

export default Feature;