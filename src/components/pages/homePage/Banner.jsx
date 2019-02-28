import React from 'react';
import { NavButton } from 'components/commons';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);
export default class Banner extends React.Component {
  state = {
    isMenuOpen: false,
  }

  navClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  render() {
    const { isMenuOpen } = this.state;
    return (
      <header>
        <img className={cx('banner-img-web')} src={require('../../../assets/img/banner_web.png')}/>
        <img className={cx('banner-img-mobile')} src={require('../../../assets/img/banner_mobile.png')}/>
        <div className={cx('banner-title-container')}>
          <h1 className={cx('banner-title')}>Sean Lin's profile</h1>
          <ul className={cx('banner-menu')}>
            <li>Skill</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={cx('header')}>
          <span>Sean Lin's profile</span>
          <NavButton isOpen={isMenuOpen} onClick={this.navClick} className={cx('nav-button')} />
        </div>
      </header>
    );
  }
}
