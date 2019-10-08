import React, { forwardRef } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import style from './style.css';

const jsImg = require('../../../../../assets/img/js.svg');
const cssImg = require('../../../../../assets/img/css.svg');
const htmlImg = require('../../../../../assets/img/html.svg');
const reactReduxImg = require('../../../../../assets/img/react_redux.svg');
const gitImg = require('../../../../../assets/img/git.svg');

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
    name: 'React + Redux',
    img: reactReduxImg,
  },
  {
    name: 'Git',
    img: gitImg,
  },
];

const skillIntroKeyList = [
  'about.me.list.react',
  'about.me.list.webpack',
  'about.me.list.get',
  'about.me.list.team.player',
  'about.me.list.time.manage',
  'about.me.list.product',
  'about.me.list.ui.ix',
  'about.me.list.cross.browser',
];

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={cx('skills-wrapper')}>
      <h2 className={cx('skills-container-title')}>Skills</h2>
      <div className={cx('skill-intro-container')}>
        <ul className={cx('skill-intro-inner')}>
          {skillIntroKeyList.map((introKey, index) =>
            <li key={index} className={cx('skill-intro')}>
              <FormattedMessage id={introKey} />
            </li>
          )}
        </ul>
      </div>
      <div className={cx('skills-container')}>
        {skillList.map(skill =>
          <div key={skill.name} className={cx('skill-container')}>
            <img src={skill.img} className={cx('skill-img')} />
            <div className={cx('skill-content')}>
              <p className={cx('skill-title')}>{skill.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Skills;
