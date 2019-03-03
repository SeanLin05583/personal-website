import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Intro extends Component {
  render() {
    const { divRef } = this.props;
    return (
      <div
        ref={divRef}
        className={cx('intro')}
      >
      </div>
    )
  }
}
