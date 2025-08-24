//import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
//import './index.css';

import { useRecoilValue } from 'recoil';
//import testState from '../../Store/test/atom';
import testWithComma from '../../stores/test/testWithComma';

const a = 123;

function CompletionPage() {
  const test = useRecoilValue(testWithComma);
  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log('res', res.data);
  });

  //const test = useRecoilValue(testState);
  //return <div className="CompletionPage">CompletionPage</div>;
  //return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
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
  background: aqua;
  padding: ${a === 123 ? '4em' : '1em'};
`;
export default CompletionPage;
