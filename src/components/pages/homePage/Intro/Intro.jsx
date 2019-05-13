import React, { Component } from 'react';
import Experiences from './Experiences';
import Skills from './Skills';
import Contact from './Contact';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Intro extends Component {
  getTargetBlockTop = (targetBlock) => {
    switch (targetBlock) {
      case 'Skills':
        return this.skillsRef.offsetTop;
      case 'Experiences':
        return this.experiencesRef.offsetTop;
      case 'Contact':
        return this.contactRef.offsetTop;
      default:
        return 0;
    }
  }

  render() {
    const { domRef } = this.props;
    return (
      <div
        ref={domRef}
        className={cx('intro-container')}
      >
        <div className={cx('intro')}>
          <Skills domRef={ref => this.skillsRef = ref} />
          <Experiences domRef={ref => this.experiencesRef = ref} />
          <Contact domRef={ref => this.contactRef = ref} />
        </div>
      </div>
    )
  }
}
