// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import styled from 'styled-components';
//import { useRecoilValue } from 'recoil';
//import questionsState from '../../Store/questions/atom';

function SurveyPage() {
  //const params = useParams();

  //console.log('params', params);
  //const questions = useRecoilValue(questionsState);
  /*
  const questions = [
    {
      title: 'This is Question 1.',
      desc: 'This is description 1.',
      type: 'text',
      required: false,
      options: {
        placeholder: 'This is a placeholder.',
      },
    },
    {
      title: 'This is Question 2.',
      desc: 'This is description 2.',
      type: 'textarea',
      required: true,
      options: {
        placeholder: 'This is a placeholder.',
      },
    },
    {
      title: 'This is Question 3.',
      desc: 'This is description 3.',
      type: 'select',
      required: true,
      options: {
        items: ['Answer1', 'Answer2', 'Answer3', 'Answer4', 'Answer5'],
      },
    },
  ];
  */
  //const step = parseInt(params.step);

  //const [answers, setAnswers] = useState([]);
  //console.log(answers);

  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox />
      {/* <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      /> */}
    </SurveyPageWrapper>
    // <>
    //   <div>SurveyPage</div>
    //   <div>
    //     {/* Using this method will cause the entire page to refresh, which is not recommended. */}
    //     <a href="/2">move to CompletionPage by a tag</a>
    //     <br />
    //     {/* Using this method will cause React Router to handle it internally (recommended). */}
    //     <Link to="/2">move to CompletionPage</Link>
    //   </div>
    // </>
  );
}
const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
export default SurveyPage;
