import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Footer extends Component {
  render() {
    return (
      <footer className={cx('footer-container')}>
        <div className={cx('footer-filter')} />
        <img className={cx('footer-img')} src={require('../../../../assets/img/footer.jpg')} />
        <p className={cx('footer-copy-right')}>Copyright © 2019 Sean Lin</p>
      </footer>
    )
  }
}
