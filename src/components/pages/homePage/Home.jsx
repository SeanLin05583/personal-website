import React from 'react';
import { connect } from "react-redux";
import { IntlProvider } from 'react-intl';
import Banner from './Banner';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import { breakPointActions, langActions } from 'actions';
import { smoothScroll, getIntlMessage } from 'utils';
import breakpoint from 'configs/breakpoint';

const blockTitleList = [
  {
    key: 'AboutMe',
    intlId: 'about.me.title',
  },
  {
    key: 'Skills',
    intlId: 'skill.title',
  },
  {
    key: 'Experiences',
    intlId: 'experience.title',
  },
  {
    key: 'Contact',
    intlId: 'contact.title',
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.bannerRef = React.createRef();
    this.state = {
      isHeaderFixed: false,
    }
  }

  componentDidMount() {
    this.props.dispatch(langActions.initialLang());
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
      this.setState({ isHeaderFixed: this.bannerRef.current.getBannerBottom() < 0 });
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

  handleScrollToBlock = (targetBlock) => () => {
    const targetY = this.introRef.getTargetBlockTop(targetBlock) - 70;
    smoothScroll(targetY);
  }

  render() {
    const { isHeaderFixed } = this.state;
    const {
      breakPointState: { isMobile },
      language,
    } = this.props;

    return (
      <IntlProvider key={language} locale={language} messages={getIntlMessage(language)} >
        <div style={{ scrollBehavior: 'smooth' }}>
          <Banner
            ref={this.bannerRef}
            onScrollToBlock={this.handleScrollToBlock}
            blockTitleList={blockTitleList}
          />
          <Header
            isHeaderFixed={isHeaderFixed}
            isMobile={isMobile}
            onScrollToBlock={this.handleScrollToBlock}
            blockTitleList={blockTitleList}
          />
          <Intro ref={ref => this.introRef = ref} />
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default connect(
  state => ({
    breakPointState: state.breakPoint,
    language: state.language,
  }),
)(Home);
