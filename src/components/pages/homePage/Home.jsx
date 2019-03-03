import React from 'react';
import CanvasNest from 'canvas-nest.js';
import Banner from './Banner';
import Header from './Header';
import Intro from './Intro';

const config = {
  color: '25,172,255',
  count: 250,
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
    new CanvasNest(this.introRef, config);
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
        <Intro divRef={ref => this.introRef = ref}/>
      </div>
    );
  }
}
