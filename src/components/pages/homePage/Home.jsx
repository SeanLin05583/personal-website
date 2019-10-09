import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
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

const Home = () => {
  const breakPointState = useSelector(state => state.breakPoint);
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const bannerRef = useRef();
  const introRef = useRef();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const { isMobile, isPad, isPc } = breakPointState;

  useEffect(() => {
    dispatch(langActions.initialLang());
  }, []);

  useEffect(() => {
    const setHeaderFixed = () => {
      setIsHeaderFixed(bannerRef.current.getBannerHeight() < window.pageYOffset);
    }

    setHeaderFixed();
    window.addEventListener('scroll', setHeaderFixed);

    return () => {
      window.removeEventListener('scroll', setHeaderFixed);
    }
  }, [isMobile]);

  useEffect(() => {
    const setBreakPoint = () => {
      const mobileQuery = `(max-width: ${breakpoint.mobileBreakPoint}px)`;
      const pcQuery = `(min-width: ${breakpoint.pcBreakPoint + 1}px)`;

      const isMobileMatch = window.matchMedia(mobileQuery).matches;
      const isPcMatch = window.matchMedia(pcQuery).matches;
      const isPadMatch = !isMobileMatch && !isPcMatch;

      if (
        isMobile !== isMobileMatch ||
        isPad !== isPadMatch ||
        isPc !== isPcMatch
      ) {
        dispatch(breakPointActions.setBreakPoint({
          isMobile: isMobileMatch,
          isPad: isPadMatch,
          isPc: isPcMatch,
        }));
      }
    }

    setBreakPoint();
    window.addEventListener('resize', setBreakPoint);

    return () => {
      window.removeEventListener('resize', setBreakPoint);
    }
  }, []);

  const handleScrollToBlock = (targetBlock) => () => {
    const targetY = introRef.current.getTargetBlockTop(targetBlock) - 70;
    smoothScroll(targetY);
  }

  return (
    <IntlProvider key={language} locale={language} messages={getIntlMessage(language)} >
      <div style={{ scrollBehavior: 'smooth' }}>
        <Banner
          ref={bannerRef}
          onScrollToBlock={handleScrollToBlock}
          blockTitleList={blockTitleList}
          isMobile={isMobile}
        />
        <Header
          isHeaderFixed={isHeaderFixed}
          isMobile={isMobile}
          onScrollToBlock={handleScrollToBlock}
          blockTitleList={blockTitleList}
        />
        <Intro
          isHeaderFixed={isHeaderFixed}
          isMobile={isMobile}
          ref={introRef}
        />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default Home;
