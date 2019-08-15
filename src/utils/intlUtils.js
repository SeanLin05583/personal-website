import { enIntlData, zhIntlData } from 'intl';

export const langList = [
  {
    key: 'zh-TW',
    text: '繁體中文',
    abbreviation: '繁中',
    data: zhIntlData,
  },
  {
    key: 'en-US',
    text: 'English',
    abbreviation: 'EN',
    data: enIntlData,
  }
]

// 取得語系包
export const getIntlMessage = (langKey) => {
  return langList.find(langObj => langObj.key === langKey).data || enIntlData;
}

// 取得語系縮寫
export const getLangAbbreviation = (langKey) => {
  return langList.find(langObj => langObj.key === langKey).abbreviation;
}

// 取得語系文字
export const getLangText = (langKey) => {
  return langList.find(langObj => langObj.key === langKey).text;
}
