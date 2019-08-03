import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const jsImg = require('../../../../../assets/img/js.svg');
const cssImg = require('../../../../../assets/img/css.svg');
const htmlImg = require('../../../../../assets/img/html.svg');
const reactImg = require('../../../../../assets/img/react.svg');
const reduxImg = require('../../../../../assets/img/redux.svg');
const gitImg = require('../../../../../assets/img/git.svg');

const cx = classNames.bind(style);

const skillList = [
  {
    name: 'React',
    img: reactImg,
    star: 4.5,
  },
  {
    name: 'HTML',
    img: htmlImg,
    star: 4,
  },
  {
    name: 'CSS',
    img: cssImg,
    star: 3.5,
  },
  {
    name: 'Redux',
    img: reduxImg,
    star: 4,
  },
  {
    name: 'Git',
    img: gitImg,
    star: 4,
  },
]

export default class Skills extends PureComponent {
  renderStars = (starNumber) => {
    let starArray = new Array(Math.floor(starNumber)).fill().map((val, index) =>
      <i key={index} className={cx('fas fa-star', 'skill-star')} />
    )

    if (Math.floor(starNumber) !== starNumber) {
      starArray.push(
        <i key={starNumber + 1} className={cx('fas fa-star-half', 'skill-star')} />
      )
    }

    return <div className={cx('skill-stars-container')}>{starArray}</div>
  }
  render() {
    const { domRef } = this.props;
    return (
      <div ref={domRef} className={cx('skills-wrapper')}>
        <h2 className={cx('skills-container-title')}>Skills</h2>
        <div className={cx('skills-container')}>
          {skillList.map(skill =>
            <div key={skill.name} className={cx('skill-container')}>
              <img src={skill.img} className={cx('skill-img')} />
              <div className={cx('skill-content')}>
                <p className={cx('skill-title')}>{skill.name}</p>
                {this.renderStars(skill.star)}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
