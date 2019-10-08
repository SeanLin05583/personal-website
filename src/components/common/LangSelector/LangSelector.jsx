import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { langList, getLangAbbreviation } from 'utils';
import { langActions } from 'actions';
import { ClickOutside } from 'components/common';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const LangSelector = ({ isShowPadding }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLangMenuOpen) {
      document.documentElement.classList.add('lock-scrolling');
    } else {
      document.documentElement.classList.remove('lock-scrolling');
    }

    return () => {
      document.documentElement.classList.remove('lock-scrolling');
    };
  }, [isLangMenuOpen]);

  const handleLangMenuOpen = () => {
    setIsLangMenuOpen(true);
  }

  const handleLangMenuClose = () => {
    setIsLangMenuOpen(false);
  }

  const handleLangSelect = (langKey) => () => {
    dispatch(langActions.setLang(langKey));
  }

  return (
    <div className={cx('lang-selector', { 'is-show-padding': isShowPadding })} onClick={handleLangMenuOpen}>
      <i className='fas fa-globe' />
      <span className={cx('lang-string')}>
        {getLangAbbreviation(language)}
      </span>
      {isLangMenuOpen && ReactDOM.createPortal(
        <div className={cx('modal-container')}>
          <ClickOutside onClick={handleLangMenuClose}>
            <div className={cx('lang-menu-container')}>
              <div className={cx('lang-menu')}>
                <p className={cx('lang-menu-title')}>
                  <FormattedMessage id="language.selector.title" />
                </p>
                <div className={cx('lang-container')}>
                  {langList.map(lang => {
                    const isSelect = (lang.key === language);
                    return (
                      <div
                        key={lang.key}
                        onClick={handleLangSelect(lang.key)}
                        className={cx('lang', { 'is-selected': isSelect })}
                      >
                        <span className={cx('lang-label')}>
                          {isSelect && <i className={cx('fas fa-globe', 'lang-select-icon')} />}
                          {lang.text}
                        </span>
                      </div>
                    );
                  }
                  )}
                </div>
              </div>
            </div>
          </ClickOutside>
        </div>
        ,
        document.getElementById('app')
      )}
    </div>
  );
}

LangSelector.defaultProps = {
  isShowPadding: true,
}

export default LangSelector;
