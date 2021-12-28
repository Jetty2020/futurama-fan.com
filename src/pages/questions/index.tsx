import { NextPage } from 'next';
import { PageTitle } from '../../components/common';
import { QuestionContainer } from '../../components/questions';

const QuestionsPage: NextPage = () => {
  return (
    <div>
      <PageTitle title="Quiz" />
      <QuestionContainer />
    </div>
  );
};

export default QuestionsPage;
