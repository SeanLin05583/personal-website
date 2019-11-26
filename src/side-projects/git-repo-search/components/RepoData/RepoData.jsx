import React from 'react';
import CountDownTimer from '../CountDownTimer';
import CircleSpinner from '../CircleSpinner';
import classNames from 'classnames/bind';
import style from './style.css';
import moment from 'moment';

const cx = classNames.bind(style);

const RepoData = ({ repoData, isSearchInputDisabled, isFetchingData, totalCount }) => {
  const isSetRepoData = repoData !== null;
  const hasRepoData = repoData && totalCount > 0;
  const isNoMoreData = repoData && repoData.length === totalCount && totalCount > 0;

  return (
    <div className={cx('repo-data-wrapper')}>
      <div className={cx('repo-data-container')}>
        {isSetRepoData && !hasRepoData && <p className={cx('repo-data-hint-text')}>No repos found</p>}
        {isSetRepoData &&
          hasRepoData &&
          repoData.map(data => (
            <a key={data.id} rel="noopener noreferrer" href={data.html_url} target="_blank" className={cx('repo-data')}>
              <div className={cx('repo-data-first-row')}>
                <p className={cx('repo-title')}>{data.full_name}</p>
                <div className={cx('repo-info-container')}>
                  <span className={cx('repo-info')}>
                    <i className="far fa-star" />
                    {data.watchers}
                  </span>
                  <span className={cx('repo-info')}>
                    <i className="fas fa-code-branch" />
                    {data.forks}
                  </span>
                </div>
              </div>
              <p className={cx('repo-description')}>{data.description}</p>
              <div className={cx('repo-data-third-row')}>
                <div className={cx('repo-owner')}>
                  <img className={cx('repo-owner-avatar')} src={data.owner.avatar_url} alt={data.owner.login} />
                  <span className={cx('repo-owner-name')}>{data.owner.login}</span>
                </div>
                <span className={cx('repo-update-time')}>
                  last update: {moment(data.updated_at).format('YYYY-MM-DD')}
                </span>
              </div>
            </a>
          ))}
        {isNoMoreData && <p className={cx('repo-data-hint-text')}>No more data</p>}
        {isSearchInputDisabled && hasRepoData && !isNoMoreData && (
          <p className={cx('repo-data-hint-text')}>
            <CountDownTimer />
          </p>
        )}
        {isFetchingData && (
          <p className={cx('repo-data-hint-text')}>
            <CircleSpinner />
          </p>
        )}
      </div>
    </div>
  );
};

export default RepoData;
