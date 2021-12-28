import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export const QuestionPagination = ({
  page,
  handlePage,
  solvedQuestions,
}: {
  page: number;
  handlePage: (value: number) => void;
  solvedQuestions: number;
}) => {
  const router = useRouter();
  const handleAgain = () => {
    router.reload();
  };
  const notice = `아직 ${7 - solvedQuestions}문제 남았습니다.`;
  const noticeFirst = `첫 페이지입니다.`;
  return (
    <Container>
      <Btn
        type="button"
        onClick={() => (page > 0 ? handlePage(-1) : alert(noticeFirst))}
        data-active={page > 0}
      >
        이전 문제
      </Btn>
      {page < 4 && <PageNum>{page + 1} / 4</PageNum>}
      {page < 4 ? (
        <Btn
          type="button"
          onClick={() =>
            solvedQuestions === 7 ? handlePage(1) : alert(notice)
          }
          data-active={solvedQuestions === 7}
          data-page={page}
        >
          {page < 3 ? '다음 문제' : '결과 확인'}
        </Btn>
      ) : (
        <Btn type="button" onClick={() => handleAgain()} data-again>
          다시 풀기
        </Btn>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;
const Btn = styled.button`
  padding: 7px 15px;
  border-radius: 10px;
  background: #f38121;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  &[data-active='false'] {
    background: #f380217a;
    cursor: default;
  }
  &[data-page='3'] {
    background: #9b3293;
  }
  &[data-active='false'][data-page='3'] {
    background: #9b329273;
    cursor: default;
  }
  &[data-again] {
    background: #c7244a;
  }
`;
const PageNum = styled.p`
  font-weight: 500;
`;
