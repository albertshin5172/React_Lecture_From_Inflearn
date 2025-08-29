//import { Link } from 'react-router-dom';
//import axios from 'axios';
import styled from 'styled-components';
//import './index.css';
//import { useRecoilValue } from 'recoil';
//import testState from '../../Store/test/atom';
//import testWithComma from '../../stores/test/testWithComma';
import congrats from '../../assets/congrats.png';
import reload from '../../assets/reload.png';
import Button from '../../components/Button';
import useSurveyId from '../../hooks/useSurveyId';
import { useNavigate } from 'react-router-dom';
//const a = 123;

function CompletionPage() {
  // const test = useRecoilValue(testWithComma);
  // axios.get('http://localhost:3001/surveys').then((res) => {
  //   console.log('res', res.data);
  // });
  //const test = useRecoilValue(testState);
  //return <div className="CompletionPage">CompletionPage</div>;
  //return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;

  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    // <Box>
    <CompletionPageWrapper>
      <img src={congrats} alt="" width="209" height="204"></img>
      <MidText>설문을 완료했습니다.</MidText>
      <ReloadButton
        type="TERTIARY"
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt="" width="24" height="24" />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
    // </Box>
  );
  // return (
  //   <>
  //     <div>CompletionPage</div>
  //     <div>
  //       {/* Using this method will cause the entire page to refresh, which is not recommended. */}
  //       <a href="/">move to SurveyPage by a tag</a>
  //       <br />
  //       {/* Using this method will cause React Router to handle it internally (recommended). */}
  //       <Link to="/">move to SurveyPage</Link>
  //     </div>
  //   </>
  // );
}

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const MidText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export default CompletionPage;
