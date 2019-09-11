import React, { PureComponent } from 'react';
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

export default class Intro extends PureComponent {
  componentDidMount() {
    // not IE browser
    if (!/Trident/.test(navigator.userAgent)) {
      new CanvasNest(this.introDomRef, config);
    }
  }

  getTargetBlockTop = (targetBlock) => {
    let targetDOM = null;
    switch (targetBlock) {
      case 'AboutMe':
        targetDOM = this.abountMeRef;
        break;
      case 'Skills':
        targetDOM = this.skillsRef;
        break;
      case 'Experiences':
        targetDOM = this.experiencesRef;
        break;
      case 'Contact':
        targetDOM = this.contactRef;
        break;
      default:
        return 0;
    }

    return targetDOM.getBoundingClientRect().y + window.pageYOffset;
  }

  render() {
    return (
      <div
        ref={ref => this.introDomRef = ref}
        className={cx('intro-container')}
      >
        <div className={cx('intro')}>
          <AboutMe domRef={ref => this.abountMeRef = ref} />
          <Skills domRef={ref => this.skillsRef = ref} />
          <Experiences domRef={ref => this.experiencesRef = ref} />
          <Contact domRef={ref => this.contactRef = ref} />
        </div>
      </div>
    )
  }
}
