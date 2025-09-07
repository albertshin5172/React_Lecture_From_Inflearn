import axios from "axios";

function putSurvey(survey) {
  axios
    .put(`/surveys/${survey.id}`, survey)
    .then(() => alert("Survey has been saved."));
}

export default putSurvey;
