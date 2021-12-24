import { useCallback, useState } from 'react';
import { QuestionType } from '../../types';

interface QuestionContainerProps {
  questionData: QuestionType[];
  rowCount: number;
}

export const QuestionContainer = ({
  questionData,
  rowCount,
}: QuestionContainerProps) => {
  let initialPage = 0;
  const [page, setPage] = useState(0);
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
        {questionData.map((episode: QuestionType, index: number) => {
          const { id, question, possibleAnswers, correctAnswer } = episode;
          if (index >= rowCount * page && index < rowCount * page + rowCount)
            return (
              <li key={`${id}st-question`}>
                <h2>{question}</h2>
                <ul>
                  {possibleAnswers.map(
                    (possibleAnswer: string, index: number) => (
                      <li key={`${index}st-option`}>
                        <p>
                          {index + 1}. {possibleAnswer}
                        </p>
                      </li>
                    )
                  )}
                </ul>
                <p>Answer: {correctAnswer}</p>
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
