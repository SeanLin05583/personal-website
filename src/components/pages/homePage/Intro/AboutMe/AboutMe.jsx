import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);
const introList = [
  '兩年以上 React.js 框架以及工作流程經驗',
  '熟悉前端開發工具，Babel、webpack、NPM...等',
  '熟悉版本控制工具(Git)',
  '善於團隊合作',
  '良好的時間管理',
  '協助 PM 將業務需求轉化爲最佳的產品解決方案',
  '與 UI / UX 設計師討論最佳使用者體驗',
  '了解跨瀏覽器兼容性',
];

export default class AboutMe extends PureComponent {
  render() {
    const { domRef } = this.props;

    return (
      <div ref={domRef} className={cx('aboutme-wrapper')}>
        <h2 className={cx('aboutme-container-title')}>About Me</h2>
        <div className={cx('aboutme-container')}>
          <div className={cx('aboutme-inner')}>
            {introList.map((intro, index) =>
              <p key={index} className={cx('aboutme-intro')}>{intro}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
