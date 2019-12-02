import React, { memo, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useStateValue } from 'projects/hh-hero/state';
import { CircleSpinner } from 'projects/hh-hero/components/common';
import { apiGetHeroProfile } from 'projects/hh-hero/api';
import HeroProfileEditor from './HeroProfileEditor';
import classnames from 'classnames/bind';
import style from './style.css';

const cx = classnames.bind(style);

const HeroProfile = memo(() => {
  const { heroId } = useParams();
  const [isHeroProfileLoading, setIsHeroProfileLoading] = useState(true);
  const [{ heroList }, dispatch] = useStateValue();
  const targetHero = heroList.find(hero => hero.id === heroId);

  useEffect(() => {
    const fetchHeroProfile = async heroId => {
      setIsHeroProfileLoading(true);
      const { data: responseHeroProfile } = await apiGetHeroProfile(heroId);
      dispatch({ type: 'SET_HERO_PROFILE', heroProfile: responseHeroProfile });
      setIsHeroProfileLoading(false);
    };
    if (targetHero) {
      dispatch({ type: 'SET_HERO_ID', heroId });
      fetchHeroProfile(heroId);
    }
  }, [heroId]);

  if (!targetHero) {
    return <Redirect to="/hh-hero/heroes" />;
  }

  return (
    <div className={cx('hero-profile-container')}>
      {isHeroProfileLoading && <CircleSpinner />}
      {!isHeroProfileLoading && (
        <>
          <h2 className={cx('hero-profile-title')}>{`Hello ${targetHero.name}`}</h2>
          <HeroProfileEditor heroId={heroId} />
        </>
      )}
    </div>
  );
});

export default HeroProfile;
