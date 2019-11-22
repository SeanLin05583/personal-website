import React, { forwardRef } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import style from './style.css';

import PersonalImg from 'assets/img/personal_img.jpg';

const cx = classNames.bind(style);

const descriptionList = [
  {
    titleId: 'about.me.position.title',
    descriptionId: 'about.me.position.description',
  },
  {
    titleId: 'about.me.education.title',
    descriptionId: 'about.me.education.description',
  },
  {
    titleId: 'about.me.major.title',
    descriptionId: 'about.me.major.description',
  },
];

const AboutMe = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={cx('aboutme-wrapper')}>
      <h2 className={cx('aboutme-container-title')}>
        <FormattedMessage id="about.me.title" />
      </h2>
      <div className={cx('aboutme')}>
        <div className={cx('aboutme-inner')}>
          <img src={PersonalImg} className={cx('personal-img')} />
          <div className={cx('aboutme-description-container')}>
            <p className={cx('abount-me-name')}>Sean Lin</p>
            {descriptionList.map((obj, index) => (
              <p key={index} className={cx('aboutme-description')}>
                <span className={cx('aboutme-description-title')}>
                  <FormattedMessage id={obj.titleId} />
                </span>
                <span className={cx('aboutme-description-content')}>
                  <FormattedMessage id={obj.descriptionId} />
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
