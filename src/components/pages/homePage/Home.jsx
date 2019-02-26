import React from 'react';
import CanvasNest from 'canvas-nest.js';
import Banner from './Banner.jsx';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const config = {
  color: '25,172,255',
  count: 80,
};

export default class Home extends React.Component {
  componentDidMount() {
    new CanvasNest(this.main, config);
  }
  render() {
    return (
      <div>
        <Banner />
        <div
          ref={ref => this.main = ref}
          className={cx('intro')}
        >
        </div>
      </div>
    );
  }
}
