import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const jsImg = require('../../../../../assets/img/js.svg');
const cssImg = require('../../../../../assets/img/css.svg');
const htmlImg = require('../../../../../assets/img/html.svg');
const reactImg = require('../../../../../assets/img/react.svg');
const reduxImg = require('../../../../../assets/img/redux.svg');

const cx = classNames.bind(style);

const skillList = [
  {
    name: 'JavaScript',
    img: jsImg,
  },
  {
    name: 'HTML',
    img: htmlImg,
  },
  {
    name: 'CSS',
    img: cssImg,
  },
  {
    name: 'React',
    img: reactImg,
  },
  {
    name: 'Redux',
    img: reduxImg,
  },
]

export default class Skills extends Component {
  render() {
    const { domRef } = this.props;
    return (
      <div ref={domRef} className={cx('skills-wrapper')}>
        <h2>Skills</h2>
        <div className={cx('skills-container')}>
          {skillList.map(skill =>
            <div key={skill.name} className={cx('skill-container')}>
              <img src={skill.img} className={cx('skill-img')} />
              <p className={cx('skill-title')}>{skill.name}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
