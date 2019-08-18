import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { langList, getLangAbbreviation } from 'utils';
import { langActions } from 'actions';
import { ClickOutside } from 'components/common';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

class LangSelector extends PureComponent {
  static defaultProps = {
    isShowPadding: true,
  }

  state = {
    isLangMenuOpen: false,
  }

  handleLangMenuOpen = () => {
    this.setState({ isLangMenuOpen: true });
  }

  handleLangMenuClose = () => {
    this.setState({ isLangMenuOpen: false });
  }

  handleLangSelect = (langKey) => () => {
    this.props.dispatch(langActions.setLang(langKey));
  }

  render() {
    const { isShowPadding, language } = this.props;
    const { isLangMenuOpen } = this.state;

    return (
      <div className={cx('lang-selector', { 'is-show-padding': isShowPadding })} onClick={this.handleLangMenuOpen}>
        <i className='fas fa-globe' />
        <span className={cx('lang-string')}>
          {getLangAbbreviation(language)}
        </span>
        {isLangMenuOpen && ReactDOM.createPortal(
          <div className={cx('modal-container')}>
            <ClickOutside onClick={this.handleLangMenuClose}>
              <div className={cx('lang-menu-container')}>
                <p className={cx('lang-menu-title')}>選擇語言</p>
                <div className={cx('lang-container')}>
                  {langList.map(lang => {
                    const isSelect = (lang.key === language);
                    return (
                      <div
                        key={lang.key}
                        onClick={this.handleLangSelect(lang.key)}
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
            </ClickOutside>
          </div>
          ,
          document.getElementById('app')
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    language: state.language,
  }),
)(LangSelector);
