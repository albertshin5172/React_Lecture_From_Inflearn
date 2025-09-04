import fetcher from "../lib/fetcher";
import { setError, setLoading, setSurvey } from "../stores/survey/surveySlice";

const fetchSurvey = (surveyId) => (dispatch, getState) => {
  setLoading(true);
  fetcher(`/surveys/${surveyId}`)
    .then((data) => {
      console.log(data);
      dispatch(setSurvey(data));
    })
    .catch((err) => {
      dispatch(setError(err));
    })
    .finally(() => {
      setLoading(true);
    });
};

export default fetchSurvey;
