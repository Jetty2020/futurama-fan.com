import { useEffect, useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { useApiData } from '../../hooks';
import { QuestionType } from '../../types';
import { Error, Loading } from '../common';
import styled from '@emotion/styled';
import { QuestionPagination, QuestionsResult } from '.';

export const QuestionContainer = () => {
  const name = 'questions';
  const { data, error } = useApiData(name);
  const rowCount = 7;
  const [radio, setRadio] = useState(
    Array(Math.ceil(28 / rowCount)).fill(Array(rowCount).fill(undefined))
  );
  const [displayAnswer, setDisPlayAnswer] = useState(false);
  const [page, setPage] = useState(0);
  const handlePage = (num: number) => {
    setPage((curr) => curr + num);
    window.scrollTo(0, 0);
  };
  if (!data) return <Loading />;
  if (error) return <Error />;

  const solvedQuestions = radio.map((arr, arrIndex) => {
    let sum = 0;
    if (arrIndex === page)
      arr.map((val: number) => {
        if (val !== undefined) sum++;
      });
    return sum;
  })[page];

  return (
    <Container>
      {page < 4 ? (
        <ul>
          {data.map((questionData: QuestionType, index: number) => {
            if (index >= rowCount * page && index < rowCount * page + rowCount)
              return (
                <QuestionCard
                  key={`${index}-question`}
                  questionData={questionData}
                  index={index}
                  setRadio={setRadio}
                  radio={radio}
                  displayAnswer={displayAnswer}
                />
              );
          })}
        </ul>
      ) : (
        <QuestionsResult answerData={radio} questionsData={data} setDisPlayAnswer={setDisPlayAnswer} />
      )}
      <QuestionPagination
        page={page}
        handlePage={handlePage}
        solvedQuestions={solvedQuestions}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 10px 50px;
`;
