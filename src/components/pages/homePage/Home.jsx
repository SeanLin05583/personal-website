import React from 'react';
import CanvasNest from 'canvas-nest.js';
import Banner from './Banner';
import Header from './Header';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const config = {
  color: '25,172,255',
  count: 80,
  zIndex: -100,
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.bannerRef = React.createRef();
    this.state = {
      isHeaderFixed: false,
    }
  }
  componentDidMount() {
    new CanvasNest(this.main, config);
    const { isHeaderFixed } = this.state;
    window.addEventListener('scroll', () => {
      this.setState({ isHeaderFixed: this.bannerRef.current.getBannerHeight() < window.scrollY && !isHeaderFixed });
    });
  }
  render() {
    const { isHeaderFixed } = this.state;
    return (
      <div>
        <Banner ref={this.bannerRef} />
        <Header isHeaderFixed={isHeaderFixed} />
        <div
          ref={ref => this.main = ref}
          className={cx('intro')}
        >
        </div>
      </div>
    );
  }
}
