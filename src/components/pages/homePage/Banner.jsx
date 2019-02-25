import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cssClass = classNames.bind(style);

export default class Banner extends React.Component {
  render() {
    return (
      <header>
        <div className={cssClass('banner-container')}>
          <img className={cssClass('banner-img')} />
          <div className={cssClass('banner-title-container')}>
            <h1 className={cssClass('banner-title')}>SeanLin Profile</h1>
            <ul className={cssClass('banner-menu')}>
              <li>Skill</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
