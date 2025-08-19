//import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import './index.css';

const a = 123;

function CompletionPage() {
  //return <div className="CompletionPage">CompletionPage</div>;
  return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
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
