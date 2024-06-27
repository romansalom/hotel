import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './timeline.css';

const TimeLine = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // Asegura que la animación suceda solo una vez
    });

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('aos-animate');
          }, index * 700); // Retraso para cada elemento
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [visibleImage, setVisibleImage] = useState(null);

  const handleItemClick = (index) => {
    setVisibleImage(visibleImage === index ? null : index);
  };

  const timelineItems = [
    {
      date: 'January 2023',
      title: 'Initial Investment',
      content:
        'The first step involves securing the initial funding for the project.',
    },
    {
      date: 'February 2023',
      title: 'Land Acquisition',
      content:
        'The next step is acquiring the land where the complex will be built.',
    },
    {
      date: 'March 2023',
      title: 'Design and Planning',
      content: 'Architects and planners work together to design the complex.',
    },
    {
      date: 'April 2023',
      title: 'Construction',
      content: 'Construction begins following the approved designs and plans.',
    },
    {
      date: 'May 2023',
      title: 'Marketing',
      content:
        'Marketing efforts start to attract potential buyers and investors.',
    },
    {
      date: 'June 2023',
      title: 'Completion',
      content: 'The complex is completed and ready for occupancy.',
    },
  ];

  return (
    <div className="timeline-container bg-[#404040]">
      <div className="timeline-line"></div>
      <ul className="timeline">
        {timelineItems.map((item, index) => (
          <li key={index} data-aos="fade-up">
            {' '}
            <div className="timeline-point"></div>
            <div className="corner-sticker"></div>
            <time className="fecha font-mono italic">{item.date}</time>
            <li key={index} className="timeline-item" data-aos="fade-up">
              <div className="timeline-content">
                <div className="timeline-text">
                  <div className="text-lg font-black">{item.title}</div>
                  <p>{item.content}</p>
                </div>
              </div>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
