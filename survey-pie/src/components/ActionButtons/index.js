import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
//import { useParams } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
//import questionsState from '../../Store/questions/atom';
import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import postAnswers from '../../services/postAnswers';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnswers';
import { useState } from 'react';

function ActionButtons() {
  //const params = useParams();
  //const step = parseInt(params.step);
  //const questionsLength = questions.length;
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const [isPosting, setIsPosting] = useState(false);
  //const questions = useRecoilValue(questionsState);
  const questionsLength = useRecoilValue(questionsLengthState);

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        // <Button onClick={() => navigate(`/survey/id/${step - 1}`)}>이전</Button>
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                //console.log(err.response);
                alert('에러가 발생했습니다. 다시 시도해주세요.');
                setIsPosting(false);
              });
          }}
          disabled={isPosting}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
