import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { BannerWithInput, RepoData } from './components';

const SEARCH_API_RATE_LIMIT_SECOND = 6; // API rate limit 一分鐘限定 10 次，故為 6 秒一次
const SEARCH_RESULT_PER_PAGE = 10; // 一次搜尋顯示幾筆資料

function App() {
  const [repoData, setRepoData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isSearchInputDisabled, setIsSearchInputDisabled] = useState(false);
  const appContainerRef = useRef(null);

  const handleRepoSearch = useCallback(
    async (searchValue, page = 1) => {
      if (isSearchInputDisabled || isFetchingData) return;

      if (page === 1) {
        setRepoData(null);
        setTotalCount(0);
      }

      setIsFetchingData(true);
      try {
        const searchResult = await axios.get(
          `https://api.github.com/search/repositories?q=topic:${searchValue}&page=${page}&per_page=${SEARCH_RESULT_PER_PAGE}`
        );

        if (page === 1) {
          setRepoData(searchResult.data.items);
        } else {
          setRepoData([...repoData, ...searchResult.data.items]);
          setPageIndex(page);
        }

        setTotalCount(searchResult.data['total_count']);
        setIsSearchInputDisabled(true);
        setTimeout(() => {
          setIsSearchInputDisabled(false);
        }, SEARCH_API_RATE_LIMIT_SECOND * 1000);
      } finally {
        setIsFetchingData(false);
      }
    },
    [isSearchInputDisabled, isFetchingData, repoData]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset + window.innerHeight >= appContainerRef.current.scrollHeight) {
        if (repoData && repoData.length === totalCount) return;
        handleRepoSearch(searchInputValue, pageIndex + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageIndex, searchInputValue, handleRepoSearch, repoData, totalCount]);

  return (
    <div ref={appContainerRef}>
      <BannerWithInput
        isSearchInputDisabled={isSearchInputDisabled}
        onRepoSearch={handleRepoSearch}
        inputValue={searchInputValue}
        setInputValue={setSearchInputValue}
        isFetchingData={isFetchingData}
      />
      <RepoData
        isSearchInputDisabled={isSearchInputDisabled}
        repoData={repoData}
        totalCount={totalCount}
        isFetchingData={isFetchingData}
      />
    </div>
  );
}

export default App;
