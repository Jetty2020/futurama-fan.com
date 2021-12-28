import styled from '@emotion/styled';

export const QuestionPagination = ({
  page,
  handlePage,
  solvedQuestions,
}: {
  page: number;
  handlePage: (value: number) => void;
  solvedQuestions: number;
}) => {
  const notice = `아직 ${7 - solvedQuestions}문제 남았습니다.`;
  return (
    <Container>
      {page > 0 ? (
        <Btn type="submit" onClick={() => handlePage(-1)}>
          이전 문제
        </Btn>
      ) : (
        <span></span>
      )}
      <PageNum>{page + 1} / 4</PageNum>
      {page < 5 ? (
        <Btn
          type="submit"
          // onClick={() =>
          //   solvedQuestions === 7 ? handlePage(1) : alert(notice)
          // }
          onClick={() => handlePage(1)}
          data-active={solvedQuestions === 7}
          data-page={page}
        >
          {page < 3 ? '다음 문제' : '결과 확인'}
        </Btn>
      ) : (
        <span></span>
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
`;
const PageNum = styled.p`
  font-weight: 500;
`;
