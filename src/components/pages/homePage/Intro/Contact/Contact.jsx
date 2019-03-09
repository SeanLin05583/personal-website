import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Skills extends Component {
  render() {
    return (
      <div className={cx('contact-container')}>
        <h2>Contact Me</h2>
      </div>
    )
  }
}
