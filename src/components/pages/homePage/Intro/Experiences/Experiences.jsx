import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const imgAccupass = require('../../../../../assets/img/logo-accupass.svg');
const imgAccupasMobile = require('../../../../../assets/img/logo-accupass-mobile.png');
const imgLeo = require('../../../../../assets/img/logo-leo.png');
const imgLeoMobile = require('../../../../../assets/img/logo-leo-mobile.png');

const expList = [
  {
    title: '2018.06 - 現今',
    companyTitle: 'Accupass',
    jobTitle: '前端工程師',
    img: imgAccupass,
    imgMobile: imgAccupasMobile,
    imgStyle: 'exp-logo-accupass',
  },
  {
    title: '2017.02 - 2018.06',
    companyTitle: '國眾電腦',
    jobTitle: 'MIS維運工程師 / 前端工程師',
    img: imgLeo,
    imgMobile: imgLeoMobile,
    imgCircle: false,
    imgStyle: 'exp-logo-leo',
  },
];

export default class Experiences extends Component {
  renderExperiences = () => {
    return expList.map((exp, index) =>
      <div key={`${index}${exp.title}`} className={cx('exp')}>
        <div className={cx('exp-pc-logo-container')}>
          <img className={cx(exp.imgStyle)} src={exp.img} />
        </div>
        <div className={cx('exp-progress-bar-container')}>
          <span />
          <span />
          <span />
        </div>
        <section className={cx('exp-content-container')}>
          <div className={cx('exp-title')}>
            <span className={cx('exp-title-divider')}/>
            <h3 className={cx('exp-title-time')}>{exp.title}</h3>
          </div>
          <div className={cx('exp-sub-title-container')}>
            <img className={cx('exp-logo-mobile', exp.imgStyle)} src={exp.imgMobile || exp.img} />
            <div className={cx('exp-sub-title')}>
              <p className={cx('exp-company-title')}>
                {exp.companyTitle}
              </p>
              <p className={cx('exp-job-title')}>
                {exp.jobTitle}
              </p>
            </div>
          </div>
          <div className={cx('exp-content')}>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </section>
      </div>
    );
  }
  render() {
    const { domRef } = this.props;
    return (
      <div ref={domRef} className={cx('exp-container')}>
        <h2 className={cx('exp-container-title')}>Experiences</h2>
        {this.renderExperiences()}
      </div>
    )
  }
}
