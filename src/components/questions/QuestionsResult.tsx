import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { QuestionType } from '../../types';

export const QuestionsResult = ({
  answerData,
  questionsData,
  setDisPlayAnswer,
}: {
  answerData: Array<Array<number>>;
  questionsData: QuestionType[];
  setDisPlayAnswer: (value: boolean) => void;
}) => {
  const [sum, setSum] = useState<number>(0);
  const random = ~~(Math.random() * 5);
  useEffect(() => {
    setDisPlayAnswer(true);
    answerData.map((arr, arrIndex) => {
      arr.map((val: number, valIndex: number) => {
        if (
          questionsData[arrIndex * 7 + valIndex].possibleAnswers[val] ===
          questionsData[arrIndex * 7 + valIndex].correctAnswer
        )
          setSum((curr) => curr + 1);
      });
    });
  }, [answerData, questionsData, setDisPlayAnswer]);

  return (
    <Container>
      <ScoreBox>
        <div>Score : </div>
        <div>{sum} / 28 점</div>
      </ScoreBox>
      <Imgbox src={`/random/${random}.jpg`} alt="result-img" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70vh;
  margin: 0 auto 20px;
  font-size: 30px;
  font-weight: 500;
`;
const ScoreBox = styled.div`
  & div:first-of-type {
    margin-right: 10px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: flex;
  }
`;
const Imgbox = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;
