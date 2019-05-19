import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Skills extends Component {
  render() {
    const { domRef } = this.props;
    return (
      <div ref={domRef} className={cx('contact-container')}>
        <h2 className={cx('contact-container-title')}>Contact Me</h2>
        <div>
          <div className={cx('contact-my-name')}>
            TZU HSUAN LIN
          </div>
          <div className={cx('contact-method')}>
            <span className={cx('contact-method-title')}>
              e-mail:
            </span>
            <span className={cx('contact-method-content')}>
              seanlin05583@gmail.com
            </span>
          </div>
          <div className={cx('contact-method')}>
            <span className={cx('contact-method-title')}>
              phone:
            </span>
            <span className={cx('contact-method-content')}>
              +886 981-676-912
            </span>
          </div>
        </div>
        <div className={cx('contact-social-media-container')}>
          <a href="https://www.linkedin.com/in/sean-lin-06b2b4155/" target="_blank">
            <i className={cx('fab', 'fa-linkedin', 'contact-btn', 'contact-linkin')} />
          </a>
          <a href="https://github.com/SeanLin05583" target="_blank">
            <i className={cx('fab', 'fa-github', 'contact-btn', 'contact-github')} />
          </a>
        </div>
      </div>
    )
  }
}
