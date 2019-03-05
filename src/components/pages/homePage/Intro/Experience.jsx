import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Experience extends Component {
  render() {
    return (
      <div className={cx('exp-container')}>
        <h2>Experiences</h2>
        <div className={cx('exp')}>
          <div className={cx('exp-logo-container')}>
            <img className={cx('exp-logo')} src={require('../../../../assets/img/logo-accupass.png')} />
          </div>
          <div className={cx('exp-progress-bar-container')}>
            <span />
            <span />
            <span />
          </div>
          <section className={cx('exp-content-container')}>
            <div className={cx('exp-title')}>
              <span />
              <h3>Accupass 活動通</h3>
            </div>
            <div className={cx('exp-content')}>
            </div>
          </section>
        </div>
        <div className={cx('exp')}>
          <div className={cx('exp-logo-container')}>
            <img className={cx('exp-logo')} src={require('../../../../assets/img/logo-leo.jpg')} />
          </div>
          <div className={cx('exp-progress-bar-container')}>
            <span />
            <span />
            <span />
          </div>
          <section className={cx('exp-content-container')}>
            <div className={cx('exp-title')}>
              <span />
              <h3>國眾電腦</h3>
            </div>
            <div className={cx('exp-content')}>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
