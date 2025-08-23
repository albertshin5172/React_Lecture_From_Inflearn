//import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import questionsState from '../Store/questions/atom';
import useStep from './useStep';

function useCurrentQuestion() {
  //const params = useParams();

  //const step = parseInt(params.step);
  const step = useStep();
  const questions = useRecoilValue(questionsState);

  return questions[step];
}

export default useCurrentQuestion;
