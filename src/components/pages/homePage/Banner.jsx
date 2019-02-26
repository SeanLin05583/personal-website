import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Banner extends React.Component {
  render() {
    return (
      <header>
        <img className={cx('banner-img')} />
        <div className={cx('banner-title-container')}>
          <h1 className={cx('banner-title')}>SeanLin's Profile</h1>
          <ul className={cx('banner-menu')}>
            <li>Skill</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={cx('header')}>
          <span>SeanLin's Profile</span>
          <div className={cx('menu-icon')}>
            <i className="fas fa-bars" />
          </div>
        </div>
      </header>
    );
  }
}
