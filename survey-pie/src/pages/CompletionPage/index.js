import { Link } from 'react-router-dom';

function CompletionPage() {
  return (
    <>
      <div>CompletionPage</div>
      <div>
        {/* Using this method will cause the entire page to refresh, which is not recommended. */}
        <a href="/">move to SurveyPage by a tag</a>
        <br />
        {/* Using this method will cause React Router to handle it internally (recommended). */}
        <Link to="/">move to SurveyPage</Link>
      </div>
    </>
  );
}

export default CompletionPage;
