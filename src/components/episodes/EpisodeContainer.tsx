import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { EpisodeData } from '../../types';
import { Pagination } from '../layouts';
import { EpisodeArticle } from './EpisodeArticle';

interface EpisodeContainerProps {
  episodesData: EpisodeData[];
  rowCount: number;
  pageProps: string | string[] | undefined;
}

export const EpisodeContainer = ({
  episodesData,
  rowCount,
  pageProps,
}: EpisodeContainerProps) => {
  let initialPage = 0;

  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    if (pageProps) setPage(+pageProps - 1);
    else setPage(0);
  }, [pageProps]);

  return (
    <div>
      <ListCon>
        {episodesData.map((episodeData: EpisodeData, index: number) => {
          if (index >= rowCount * page && index < rowCount * page + rowCount)
            return (
              <EpisodeArticle
                key={`${episodeData.id}-episode`}
                episodedata={episodeData}
                index={index}
              />
            );
        })}
      </ListCon>
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPage={Math.ceil(episodesData.length / rowCount)}
      />
    </div>
  );
};

const ListCon = styled.ul`
  margin: 30px 0;
`;
