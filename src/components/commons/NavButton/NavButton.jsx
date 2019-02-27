import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

export default class NavButton extends PureComponent {
  render() {
    const { className, onClick, isOpen } = this.props;
    return (
      <div className={cx('nav', isOpen && 'open', className)} onClick={onClick}>
        <span />
        <span />
        <span />
      </div>
    )
  }
}
