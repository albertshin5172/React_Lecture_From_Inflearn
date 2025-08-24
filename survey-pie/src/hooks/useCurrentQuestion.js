//import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

//import questionsState from '../stores/survey/atom';
import useStep from './useStep';
//import { useEffect } from 'react';
//import axios from 'axios';
import surveyState from '../stores/survey/surveyState';
//import useSurveyId from './useSurveyId';

function useCurrentQuestion() {
  //const params = useParams();

  //const step = parseInt(params.step);
  const step = useStep();
  //const surveyData = useRecoilValue(surveyState);
  //const surveyId = useSurveyId();
  //const [surveyData, setSurvey] = useRecoilState(surveyState);
  const [surveyData] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     console.log(res);
  //     setSurvey(res.data);
  //   });
  // }, [surveyId, setSurvey]);

  return questions[step];
}

export default useCurrentQuestion;
