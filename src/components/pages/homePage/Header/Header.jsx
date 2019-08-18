import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavButton, LangSelector } from 'components/common';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class Header extends PureComponent {
  state = {
    isMenuOpen: false,
  }

  static defaultProps = {
    isHeaderFixed: false,
  }

  componentDidUpdate(prevProp) {
    const { isHeaderFixed, isMobile } = this.props;
    const { isMenuOpen } = this.state;
    if (prevProp.isHeaderFixed !== isHeaderFixed && !isHeaderFixed) {
      this.setState({ isMenuOpen: false });
    }

    if (prevProp.isMobile && !isMobile && isMenuOpen) {
      this.setState({ isMenuOpen: false });
    }
  }

  handleNavClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  handleMenuItemClick = (targetBlock) => () => {
    const { onScrollToBlock } = this.props;
    onScrollToBlock(targetBlock)();
    this.setState({ isMenuOpen: false });
  }

  render() {
    const { isMenuOpen } = this.state;
    const { isHeaderFixed, isMobile, onScrollToBlock, blockTitleList } = this.props;
    return (
      <header className={cx('header-container', isHeaderFixed && 'fixed')}>
        <div className={cx('header', isMenuOpen && 'open')}>
          <h1 className={cx('header-title')}>
            <FormattedMessage id="profile.title" />
          </h1>
          {!isMobile &&
            <div>
              <div className={cx('header-lang-selector-container')}>
                <LangSelector isShowPadding={false} />
              </div>
              {blockTitleList.map(blockObj =>
                <div
                  key={blockObj.key}
                  className={cx('header-web-nav-item')}
                  onClick={onScrollToBlock(blockObj.key)}
                >
                  <span className={cx('header-web-nav-block-name')}>
                    <FormattedMessage id={blockObj.intlId} />
                  </span>
                </div>
              )}
            </div>
          }
          {isMobile &&
            <div className={cx('header-mobile-menu-container')}>
              <div className={cx('header-mobile-lang-selector-container')}>
                <LangSelector isShowPadding={false} />
              </div>
              <NavButton isOpen={isMenuOpen} onClick={this.handleNavClick} />
            </div>
          }
        </div>
        <nav className={cx('menu', isMenuOpen && 'open')}>
          <ul>
            {blockTitleList.map(blockObj =>
              <li key={blockObj.key} onClick={this.handleMenuItemClick(blockObj.key)}>
                <FormattedMessage id={blockObj.intlId} />
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}
