import { NextPage } from 'next';
import { Error, Loading } from '../../components/common';
import { QuestionContainer } from '../../components/questions';
import { useApiData } from '../../hooks';

const QuestionsPage: NextPage = () => {
  const name = 'questions';
  const { data, error } = useApiData(name);
  const rowCount = 7;
  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <QuestionContainer questionData={data} rowCount={rowCount} />
    </div>
  );
};

export default QuestionsPage;
