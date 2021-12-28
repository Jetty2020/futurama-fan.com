import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { QuestionType } from '../../types';

interface QuestionCardProps {
  questionData: QuestionType;
  index: number;
  radio: Array<Array<number | undefined>>;
  setRadio: (value: Array<Array<number | undefined>>) => void;
  displayAnswer: boolean;
}

export const QuestionCard = ({
  questionData,
  index,
  radio,
  setRadio,
  displayAnswer,
}: QuestionCardProps) => {
  const { id, question, possibleAnswers, correctAnswer } = questionData;
  const tempRadio = radio.map((arr) => arr.map((val) => val));
  const handleRadio = (num: number) => {
    tempRadio[Math.floor(index / 7)][index % 7] = num;
    setRadio([...tempRadio]);
  };
  return (
    <li key={`${id}st-question`}>
      <Problem>
        <div>{id}. </div>
        <div>{question}</div>
      </Problem>
      <AnswerList>
        {possibleAnswers.map((possibleAnswer: string, answerIndex: number) => {
          return (
            <li key={`${answerIndex}st-option`}>
              <AnswerBox
                onClick={() => !displayAnswer && handleRadio(answerIndex)}
                data-checked={
                  radio[Math.floor(index / 7)][index % 7] === answerIndex
                }
                data-answer={correctAnswer == possibleAnswer && displayAnswer}
              >
                <div>{answerIndex + 1}. </div>
                <div>{possibleAnswer}</div>
              </AnswerBox>
            </li>
          );
        })}
      </AnswerList>
      {/* <p>Answer: {correctAnswer}</p> */}
    </li>
  );
};

const Problem = styled.h4`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  & div:first-of-type {
    margin-right: 6px;
  }
`;
const AnswerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 15px;
  /* place-items: center; */
  margin: 20px 0 40px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
    /* gap: 50px 20px; */
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
`;
const AnswerBox = styled.div`
  display: flex;
  position: relative;
  padding: 10px 15px;
  border-radius: 10px;
  background: #eee;
  line-height: 1.3;
  & div:first-of-type {
    margin-right: 6px;
  }
  &[data-checked='true']::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 3px solid red;
    border-radius: 10px;
  }
  &[data-answer='true'] {
    background: #6ebc46;
  }
`;
