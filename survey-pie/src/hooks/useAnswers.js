import { useRecoilState } from 'recoil';
import answerState from '../stores/answers/atom';

function useAnswers() {
  //return useRecoilValue(answerState);
  return useRecoilState(answerState);
}

export default useAnswers;
