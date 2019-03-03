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
    const { isHeaderFixed } = this.props;
    if (prevProp.isHeaderFixed !== isHeaderFixed && !isHeaderFixed) {
      this.setState({ isMenuOpen: false });
    }
  }

  navClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  render() {
    const { isMenuOpen } = this.state;
    const { isHeaderFixed } = this.props;
    return (
      <header className={cx('header-container', isHeaderFixed && 'fixed')}>
        <div className={cx('header', isMenuOpen && 'open')}>
          <h1 className={cx('title')}>Sean Lin's profile</h1>
          <NavButton isOpen={isMenuOpen} onClick={this.navClick} />
        </div>
        <nav className={cx('nav', isMenuOpen && 'open')}>
          <ul>
            <li>Skills</li>
            <li>Experiences</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
}
