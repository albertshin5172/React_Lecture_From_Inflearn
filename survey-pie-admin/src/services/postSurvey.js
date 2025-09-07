import axios from "axios";

function postSurvey(survey) {
  return axios
    .post(`/surveys`, { ...survey, createdAt: new Date().getTime() })
    .then((res) => {
      alert("Survey has been saved.");

      return res.data;
    });
}

export default postSurvey;
