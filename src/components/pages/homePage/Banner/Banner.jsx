import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LangSelector } from 'components/common';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);
export default class Banner extends React.Component {
  getBannerHeight = () => {
    return this.bannerContainer.getBoundingClientRect().height;
  }

  getWebMenuBottomPosition = () => {
    return this.menuContainer.getBoundingClientRect().bottom;
  }

  render() {
    const { onScrollToBlock, blockTitleList } = this.props;
    return (
      <div className={cx('banner-container')} ref={ref => this.bannerContainer = ref}>
        <img className={cx('banner-img-web')} src={require('../../../../assets/img/banner_web.png')} />
        <img className={cx('banner-img-mobile')} src={require('../../../../assets/img/banner_mobile.png')} />
        <div className={cx('banner-filter')} />
        <div className={cx('banner-title-container')}>
          <h1 className={cx('banner-title')}>
            <FormattedMessage id="profile.title" />
          </h1>
          <ul className={cx('banner-menu')} ref={ref => this.menuContainer = ref}>
            {blockTitleList.map(blockObj =>
              <li key={blockObj.key} onClick={onScrollToBlock(blockObj.key)}>
                <FormattedMessage id={blockObj.intlId} />
              </li>
            )}
          </ul>
        </div>
        <div className={cx('banner-lang-selector')}>
          <LangSelector />
        </div>
      </div>
    );
  }
}
