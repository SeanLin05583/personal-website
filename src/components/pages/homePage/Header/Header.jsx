import React, { PureComponent } from 'react';
import { NavButton } from 'components/commons';
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
    const { isHeaderFixed, isMobile, onScrollToBlock, blockList } = this.props;
    return (
      <header className={cx('header-container', isHeaderFixed && 'fixed')}>
        <div className={cx('header', isMenuOpen && 'open')}>
          <h1 className={cx('title')}>Sean Lin's profile</h1>
          {!isMobile &&
            <div className={cx('header-web-nav')}>
              {blockList.map(blockName =>
                <div key={blockName} onClick={onScrollToBlock(blockName)}>
                  <span>{blockName}</span>
                </div>
              )}
            </div>
          }
          {isMobile && <NavButton isOpen={isMenuOpen} onClick={this.handleNavClick} />}
        </div>
        <nav className={cx('menu', isMenuOpen && 'open')}>
          <ul>
            {blockList.map(blockName =>
              <li key={blockName} onClick={this.handleMenuItemClick(blockName)}>{blockName}</li>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}
