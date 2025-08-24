//import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import answerState from '../stores/answers/atom';
import useStep from './useStep';

function useCurrentAnswer() {
  //const params = useParams();

  //const step = parseInt(params.step);
  const step = useStep();
  const [answers, setAnswers] = useRecoilState(answerState);

  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

  return [answer, setAnswer];
}

export default useCurrentAnswer;
