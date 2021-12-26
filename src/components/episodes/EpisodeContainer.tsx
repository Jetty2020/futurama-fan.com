import { useCallback, useEffect, useState } from 'react';
import { EpisodeData } from '../../types';

interface EpisodeContainerProps {
  episodeData: EpisodeData[];
  rowCount: number;
  pageProps: string | string[] | undefined;
}

export const EpisodeContainer = ({
  episodeData,
  rowCount,
  pageProps,
}: EpisodeContainerProps) => {
  let initialPage = 0;
  
  const [page, setPage] = useState(initialPage);
  
  useEffect(() => {
    if (pageProps) setPage(+pageProps - 1);
    else setPage(0);
  }, [pageProps]);

  const handlePageUp = useCallback(() => {
    setPage((curr) => curr + 1);
    window.scrollTo(0, 0);
  }, []);
  const handlePageDown = useCallback(() => {
    setPage((curr) => curr - 1);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ul>
        {episodeData.map((episode: EpisodeData, index: number) => {
          const { id, number, title, writers, originalAirDate, desc } = episode;
          if (index >= rowCount * page && index < rowCount * page + rowCount)
            return (
              <li key={`${id}st-episode`}>
                <em>{number}</em>
                <h2>{title}</h2>
                <strong>{writers}</strong>
                <p>{originalAirDate}</p>
                <p>{desc}</p>
              </li>
            );
        })}
      </ul>
      <button type="button" onClick={handlePageDown}>
        이전 페이지
      </button>
      <button type="button" onClick={handlePageUp}>
        다음 페이지
      </button>
    </div>
  );
};
