import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cssClass = classNames.bind(style);

export default class Banner extends React.Component {
  render() {
    return (
      <section className={cssClass('banner-container')}>
        <img className={cssClass('banner-img')}/>
      </section>
    );
  }
}
