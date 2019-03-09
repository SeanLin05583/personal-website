import React, { Component } from 'react';
import Experiences from './Experiences';
import Skills from './Skills';
import Contact from './Contact';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Intro extends Component {
  render() {
    const { divRef } = this.props;
    return (
      <div
        ref={divRef}
        className={cx('intro-container')}
      >
        <div className={cx('intro')}>
          <Skills />
          <Experiences />
          <Contact />
        </div>
      </div>
    )
  }
}
