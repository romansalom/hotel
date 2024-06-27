import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './timeline.css';

const TimeLine = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('aos-animate');
            item.querySelector('.timeline-progress').style.height = '100%';
          }, index * 500); // Delay for each item
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <ul className="timeline">
        <li className="timeline-item" data-aos="fade-up">
          <div className="timeline-progress"></div>
          <div className="timeline-content">
            <time className="font-mono italic">January 2023</time>
            <div className="text-lg font-black">Initial Investment</div>
            <p>
              The first step involves securing the initial funding for the
              project.
            </p>
          </div>
        </li>
        <li className="timeline-item" data-aos="fade-up">
          <div className="timeline-progress"></div>
          <div className="timeline-content">
            <time className="font-mono italic">February 2023</time>
            <div className="text-lg font-black">Land Acquisition</div>
            <p>
              The next step is acquiring the land where the complex will be
              built.
            </p>
          </div>
        </li>
        <li className="timeline-item" data-aos="fade-up">
          <div className="timeline-progress"></div>
          <div className="timeline-content">
            <time className="font-mono italic">March 2023</time>
            <div className="text-lg font-black">Design and Planning</div>
            <p>Architects and planners work together to design the complex.</p>
          </div>
        </li>
        <li className="timeline-item" data-aos="fade-up">
          <div className="timeline-progress"></div>
          <div className="timeline-content">
            <time className="font-mono italic">April 2023</time>
            <div className="text-lg font-black">Construction</div>
            <p>Construction begins following the approved designs and plans.</p>
          </div>
        </li>
        <li className="timeline-item" data-aos="fade-up">
          <div className="timeline-progress"></div>
          <div className="timeline-content">
            <time className="font-mono italic">May 2023</time>
            <div className="text-lg font-black">Marketing</div>
            <p>
              Marketing efforts start to attract potential buyers and investors.
            </p>
          </div>
        </li>
        <li className="timeline-item" data-aos="fade-up">
          <div className="timeline-progress"></div>
          <div className="timeline-content">
            <time className="font-mono italic">June 2023</time>
            <div className="text-lg font-black">Completion</div>
            <p>The complex is completed and ready for occupancy.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;
