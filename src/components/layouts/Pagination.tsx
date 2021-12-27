import styled from '@emotion/styled';
import { useCallback, useState } from 'react';

interface PaginationProps {
  currentPage: number;
  setPage: (value: number) => void;
  totalPage: number;
}

export const Pagination = ({
  currentPage,
  setPage,
  totalPage,
}: PaginationProps) => {
  const pageWing = 3;
  const [numArr, setNumArr] = useState(
    Array(7)
      .fill(0)
      .map((val, index) => {
        const pageNum = index - pageWing + currentPage + 1;
        if (pageNum > 0) return pageNum;
        else return 0;
      })
  );
  const handlePage = (num: number) => {
    setPage(currentPage + num);
    setNumArr(
      Array(7)
        .fill(0)
        .map((val, index) => {
          const pageNum = index - pageWing + currentPage + num + 1;
          if (pageNum > 0) return pageNum;
          else return 0;
        })
    );
    window.scrollTo(0, 0);
  };
  console.log(currentPage, totalPage);
  return (
    <Container>
      <BtnCon>
        {currentPage > pageWing && (
          <button type="button" onClick={() => handlePage(-pageWing - 1)}>
            <PageImg src="/icons/previous.svg" alt="이전 버튼" />
          </button>
        )}
        {numArr.map((pageNum: number) => {
          if (pageNum === currentPage + 1)
            return <span key={`${pageNum}-pageBtn`}>{pageNum}</span>;
          else if (pageNum > 0 && totalPage >= pageNum)
            return (
              <button
                key={`${pageNum}-pageBtn`}
                type="button"
                onClick={() => handlePage(pageNum - currentPage - 1)}
              >
                {pageNum}
              </button>
            );
        })}
        {currentPage < totalPage - pageWing - 1 && (
          <button type="button" onClick={() => handlePage(pageWing + 1)}>
            <PageImg src="/icons/next.svg" alt="다음 버튼" />
          </button>
        )}
      </BtnCon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
`;
const BtnCon = styled.div`
  display: flex;
  align-items: center;
  & button,
  span {
    font-size: 20px;
    padding: 0 5px;
  }
  & span {
    color: #f38121;
    padding-bottom: 1px;
  }
`;
const PageImg = styled.img`
  display: block;
  width: 24px;
  padding-bottom: 2px;
`;
