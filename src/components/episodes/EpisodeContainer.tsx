import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useApiData } from '../../hooks';
import { EpisodeData } from '../../types';
import { Error, Loading } from '../common';
import { Pagination } from '../layouts';
import { EpisodeArticle } from './EpisodeArticle';

interface EpisodeContainerProps {
  pageProps: string | string[] | undefined;
}

export const EpisodeContainer = ({
  pageProps,
}: EpisodeContainerProps) => {
  const rowCount = 10;
  let initialPage = 0;
  const [page, setPage] = useState(initialPage);
  const path = 'episodes';
  const { data, error } = useApiData(path);

  useEffect(() => {
    if (pageProps) setPage(+pageProps - 1);
    else setPage(0);
  }, [pageProps]);

  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <ListCon>
        {data.map((episodeData: EpisodeData, index: number) => {
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
        totalPage={Math.ceil(data.length / rowCount)}
      />
    </div>
  );
};

const ListCon = styled.ul`
  margin: 30px 0;
`;
