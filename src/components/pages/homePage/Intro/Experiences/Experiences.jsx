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
    companyTitle: 'Accupass 活動通',
    jobTitle: '前端工程師',
    img: imgAccupass,
    imgMobile: imgAccupasMobile,
    imgStyle: 'exp-logo-accupass',
    jobDescriptionList: [
      '與前後端團隊、UI/UX 設計師合作，打造良好體驗之活動通官網，包含舊有站台翻新(React.js)',
      '根據業務單位市場調查之需求進行現有功能調整',
      '針對 QA、CR 回報之 Bug 進行修復',
      '依特殊專案之需求，進行前端架構規劃',
      '優化前端團隊開發產品之 Git Flow，使版控與上版更順利',
    ],
  },
  {
    title: '2017.02 - 2018.06',
    companyTitle: '國眾電腦',
    jobTitle: 'MIS 維運工程師 / 前端工程師',
    img: imgLeo,
    imgMobile: imgLeoMobile,
    imgCircle: false,
    imgStyle: 'exp-logo-leo',
    jobDescriptionList:[
      'ERP 系統維運，包含 MySQL 資料庫基本操作、舊功能維護、新功能前端修改',
      '設計公司內部駐點維修工程師使用之工作外派系統，包含地圖追蹤位置、填寫維修單據、拍照上傳機器狀態...等功能，與前端 PWA 開發',
    ],
  },
];

export default class Experiences extends Component {
  renderExperiences = () => {
    return expList.map((exp, index) =>
      <div key={`${index}${exp.title}`} className={cx('exp')}>
        <div className={cx('exp-pc-logo-container')}>
          <img className={cx(exp.imgStyle)} src={exp.img} />
        </div>
        <div className={cx('exp-progress-bar')}>
          <span />
          <span />
          <span />
        </div>
        <section className={cx('exp-content-container')}>
          <div className={cx('exp-title')}>
            <span className={cx('exp-title-divider')} />
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
            {exp.jobDescriptionList.map(desc => <p key={desc} className={cx('exp-job-description')}>{desc}</p>)}
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
