import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Skills extends Component {
  render() {
    const { domRef } = this.props;
    return (
      <div ref={domRef} className={cx('skills-container')}>
        <h2>Skills</h2>
      </div>
    )
  }
}
