import React, { useState, useEffect } from 'react';
import CountDownTimer from '../CountDownTimer';
import CircleSpinner from '../CircleSpinner';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);
const SEARCH_INPUT_POST_DEBOUNCE_TIME = 1500;
let searchInputPostDebounceTimer = null;

const BannerWithInput = ({ isSearchInputDisabled, onRepoSearch, inputValue, setInputValue, isFetchingData }) => {
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);

  useEffect(() => {
    const handleInputKeyDown = e => {
      if (e.keyCode === 13 && isSearchInputFocused) {
        clearTimeout(searchInputPostDebounceTimer);
        onRepoSearch(inputValue);
      }
    };

    window.addEventListener('keydown', handleInputKeyDown);
    return () => {
      window.removeEventListener('keydown', handleInputKeyDown);
    };
  }, [inputValue, isSearchInputFocused, onRepoSearch]);

  const handleSearchInputValueChange = e => {
    const newSearchInputValue = e.target.value;
    setInputValue(newSearchInputValue);

    if (!isSearchInputDisabled && newSearchInputValue) {
      clearTimeout(searchInputPostDebounceTimer);
      searchInputPostDebounceTimer = setTimeout(() => {
        onRepoSearch(newSearchInputValue);
      }, SEARCH_INPUT_POST_DEBOUNCE_TIME);
    }
  };

  return (
    <div className={cx('banner-container')}>
      <div className={cx('banner-inner')}>
        <h1 className={cx('repo-search-title')}>Seach repo on github</h1>
        <div className={cx('repo-search-input-container')}>
          <input
            placeholder="Enter repo key words"
            className={cx('repo-search-input')}
            value={inputValue}
            onChange={handleSearchInputValueChange}
            onFocus={() => {
              setIsSearchInputFocused(true);
            }}
            onBlur={() => {
              setIsSearchInputFocused(false);
            }}
          />
          {isFetchingData && (
            <div className={cx('repo-search-input-spinner-container')}>
              <CircleSpinner />
            </div>
          )}
        </div>
        <p className={cx('count-down-timer-container')}>{isSearchInputDisabled && <CountDownTimer />}</p>
      </div>
    </div>
  );
};

export default BannerWithInput;
