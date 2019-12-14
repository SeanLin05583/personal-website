import React, { forwardRef } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={cx('contact-container')}>
      <h2 className={cx('contact-container-title')}>
        <FormattedMessage id="contact.title" />
      </h2>
      <div className={cx('contact-inner')}>
        <div className={cx('contact-my-name')}>
          <FormattedMessage id="contact.name" />
        </div>
        <div className={cx('contact-method')}>
          <span className={cx('contact-method-title')}>Email：</span>
          <span className={cx('contact-method-content')}>seanlin05583@gmail.com</span>
        </div>
        {/* <div className={cx('contact-method')}>
          <span className={cx('contact-method-title')}>Mobile：</span>
          <span className={cx('contact-method-content')}>
            <span>+886 981-676-912</span>
            <span> (18:30 ~ 23:00)</span>
          </span>
        </div> */}
        <div className={cx('contact-social-media-container')}>
          <a href="https://www.linkedin.com/in/sean-lin-06b2b4155/" target="_blank">
            <i className={cx('fab', 'fa-linkedin', 'contact-btn', 'contact-linkin')} />
          </a>
          <a href="https://github.com/SeanLin05583" target="_blank">
            <i className={cx('fab', 'fa-github', 'contact-btn', 'contact-github')} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Skills;
