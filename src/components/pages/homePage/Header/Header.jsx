import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavButton, LangSelector } from 'components/common';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const Header = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isHeaderFixed, isMobile, onScrollToBlock, blockTitleList } = props;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isMobile, isHeaderFixed]);

  const handleNavClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleMenuItemClick = targetBlock => () => {
    onScrollToBlock(targetBlock)();
    setIsMenuOpen(false);
  };

  return (
    <header className={cx('header-container', isHeaderFixed && 'fixed')}>
      <div className={cx('header', isMenuOpen && 'open')}>
        <h1 className={cx('header-title')}>
          <FormattedMessage id="profile.title" />
        </h1>
        {!isMobile && (
          <div className={cx('header-web-nav-container')}>
            {blockTitleList.map(blockObj => (
              <div key={blockObj.key} className={cx('header-web-nav-item')} onClick={onScrollToBlock(blockObj.key)}>
                <span className={cx('header-web-nav-block-name')}>
                  <FormattedMessage id={blockObj.intlId} />
                </span>
              </div>
            ))}
            <div className={cx('header-lang-selector-container')}>
              <LangSelector isShowPadding={false} />
            </div>
          </div>
        )}
        {isMobile && (
          <div className={cx('header-mobile-left')}>
            <div className={cx('header-mobile-lang-selector-container')}>
              <LangSelector isShowPadding={false} />
            </div>
            <NavButton isOpen={isMenuOpen} onClick={handleNavClick} />
          </div>
        )}
      </div>
      {isMobile && (
        <nav className={cx('header-mobile-menu', isMenuOpen && 'is-open')}>
          <ul>
            {blockTitleList.map(blockObj => (
              <li key={blockObj.key} onClick={handleMenuItemClick(blockObj.key)}>
                <FormattedMessage id={blockObj.intlId} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

Header.defaultProps = {
  isHeaderFixed: false,
};

export default Header;
