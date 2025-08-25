import { useRecoilValue } from 'recoil';
import answerState from '../stores/answers/atom';

function useAnswers() {
  return useRecoilValue(answerState);
}

export default useAnswers;
