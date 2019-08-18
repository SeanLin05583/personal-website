import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);
const introKeyList = [
  'about.me.list.react',
  'about.me.list.webpack',
  'about.me.list.get',
  'about.me.list.team.player',
  'about.me.list.time.manage',
  'about.me.list.product',
  'about.me.list.ui.ix',
  'about.me.list.cross.browser',
];

export default class AboutMe extends PureComponent {
  render() {
    const { domRef } = this.props;

    return (
      <div ref={domRef} className={cx('aboutme-wrapper')}>
        <h2 className={cx('aboutme-container-title')}>
          <FormattedMessage id="about.me.title" />
        </h2>
        <div className={cx('aboutme-container')}>
          <div className={cx('aboutme-inner')}>
            {introKeyList.map((introKey, index) =>
              <p key={index} className={cx('aboutme-intro')}>
                <FormattedMessage id={introKey} />
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
