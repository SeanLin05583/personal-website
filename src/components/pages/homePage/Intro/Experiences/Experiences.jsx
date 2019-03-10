import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const imgAccupass = require('../../../../../assets/img/logo-accupass.png');
const imgLeo = require('../../../../../assets/img/logo-leo.png');

const expList = [
  {
    title: '2018.06 - 現今',
    companyTitle: 'Accupass',
    jobTitle: '前端工程師',
    img: imgAccupass,
    imgCircle: true,
  },
  {
    title: '2017.02 - 2018.06',
    companyTitle: '國眾電腦',
    jobTitle: 'MIS維運工程師 / 前端工程師',
    img: imgLeo,
    imgCircle: false,
  },
];

export default class Experiences extends Component {
  renderExperiences = () => {
    return expList.map((exp, index) =>
      <div key={`${index}${exp.title}`} className={cx('exp')}>
        <div className={cx('exp-pc-logo-container')}>
          <img className={cx('exp-logo', exp.imgCircle && 'img-circle')} src={exp.img} />
        </div>
        <div className={cx('exp-progress-bar-container')}>
          <span />
          <span />
          <span />
        </div>
        <section className={cx('exp-content-container')}>
          <div className={cx('exp-title')}>
            <span />
            <h3>{exp.title}</h3>
          </div>
          <div className={cx('exp-sub-title-container')}>
            <img className={cx('exp-logo-mobile', exp.imgCircle && 'img-circle')} src={exp.img} />
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
    return (
      <div className={cx('exp-container')}>
        <h2>Experiences</h2>
        {this.renderExperiences()}
      </div>
    )
  }
}
