import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import CanvasNest from 'canvas-nest.js';
import Experiences from './Experiences';
import Skills from './Skills';
import Contact from './Contact';
import AboutMe from './AboutMe';
import classNames from 'classnames/bind';
import style from './style.css';

const config = {
  color: '25,172,255',
  count: 250,
  zIndex: -100,
};

const cx = classNames.bind(style);

const Intro = forwardRef((props, ref) => {
  const introRef = useRef();
  const abountMeRef = useRef();
  const skillsRef = useRef();
  const experiencesRef = useRef();
  const contactRef = useRef();
  const { isHeaderFixed } = props;

  useEffect(() => {
    // not IE browser
    if (!/Trident/.test(navigator.userAgent)) {
      new CanvasNest(introRef.current, config);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    getTargetBlockTop: (targetBlock) => {
      let targetDOM = null;
      switch (targetBlock) {
        case 'AboutMe':
          targetDOM = abountMeRef.current;
          break;
        case 'Skills':
          targetDOM = skillsRef.current;
          break;
        case 'Experiences':
          targetDOM = experiencesRef.current;
          break;
        case 'Contact':
          targetDOM = contactRef.current;
          break;
        default:
          return 0;
      }

      return targetDOM.getBoundingClientRect().top + window.pageYOffset;
    }
  }));

  return (
    <div
      className={cx('intro-container', { 'is-header-fixed': isHeaderFixed })}
    >
      <div
        ref={introRef}
        className={cx('intro')}
      >
        <AboutMe ref={abountMeRef} />
        <Skills ref={skillsRef} />
        <Experiences ref={experiencesRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
})

export default Intro;
