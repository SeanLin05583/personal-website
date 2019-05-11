import React from 'react';
import { connect } from "react-redux";
import CanvasNest from 'canvas-nest.js';
import Banner from './Banner';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import { breakPointActions } from 'actions';
import breakpoint from 'configs/breakpoint';

const config = {
  color: '25,172,255',
  count: 250,
  zIndex: -100,
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.bannerRef = React.createRef();
    this.state = {
      isHeaderFixed: false,
    }
  }

  componentDidMount() {
    new CanvasNest(this.introRef, config);

    this.setBreakPoint();
    window.addEventListener('scroll', this.setHeaderFixed);
    window.addEventListener('resize', this.setBreakPoint);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setBreakPoint);
  }

  setHeaderFixed = () => {
    const { isMobile } = this.props.breakPointState;
    if (isMobile) {
      this.setState({ isHeaderFixed: this.bannerRef.current.getBannerHeight() < window.scrollY });
    } else {
      this.setState({ isHeaderFixed: this.bannerRef.current.getWebMenuBottomPosition() < 0 });
    }
  }

  setBreakPoint = () => {
    const mobileQuery = `(max-width: ${breakpoint.mobileBreakPoint}px)`;
    const pcQuery = `(min-width: ${breakpoint.pcBreakPoint + 1}px)`;

    const isMobileMatch = window.matchMedia(mobileQuery).matches;
    const isPcMatch = window.matchMedia(pcQuery).matches;
    const isPadMatch = !isMobileMatch && !isPcMatch;

    const { isMobile, isPad, isPc } = this.props.breakPointState;
    if (
      isMobile !== isMobileMatch ||
      isPad !== isPadMatch ||
      isPc !== isPcMatch
    ) {
      this.props.dispatch(breakPointActions.setBreakPoint({
        isMobile: isMobileMatch,
        isPad: isPadMatch,
        isPc: isPcMatch,
      }));
    }
  }

  render() {
    const { isHeaderFixed } = this.state;
    return (
      <div>
        <Banner ref={this.bannerRef} />
        <Header isHeaderFixed={isHeaderFixed} />
        <Intro divRef={ref => this.introRef = ref} />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({
    breakPointState: state.breakPoint,
  }),
)(Home);