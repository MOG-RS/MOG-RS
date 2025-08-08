// src/components/sections/Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css';

const images = [
  {
    src: require('../../asset/slides1.png'),
    text: 'MOG-RS: Predicting Relapse Risk in MOGAD'
  },
  {
    src: require('../../asset/slides2.png'),
    text: 'A Multicenter Neurology Collaboration Across Europe'
  },
  {
    src: require('../../asset/slides3.png'),
    text: 'Driving Innovation in MOGAD Research'
  },
  {
    src: require('../../asset/slides4.png'),
    text: 'Cross-Border Scientific Collaboration'
  },
  {
    src: require('../../asset/slides5.png'),
    text: 'Improving Long-Term Outcomes for MOGAD Patients'
  }
];

export default function Home({ t }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000); // 切换时间 4秒

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-slider">
      {images.map((image, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="slide-text">
            <h2>{image.text}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}
