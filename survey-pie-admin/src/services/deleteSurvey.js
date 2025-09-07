import axios from "axios";

function deleteSurvey(surveyId) {
  return axios.delete(`/surveys/${surveyId}`).then(() => {
    alert("Survey has been deleted.");
  });
}

export default deleteSurvey;
