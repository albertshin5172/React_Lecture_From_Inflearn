import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  const params = useParams();

  //console.log('params', params);

  const questions = [
    {
      title: 'This is Question 1.',
      desc: 'This is description 1.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: 'This is Question 2.',
      desc: 'This is description 2',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
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
      />
    </div>
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

export default SurveyPage;
