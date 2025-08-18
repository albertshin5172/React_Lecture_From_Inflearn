import { Route, Routes } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';

function App() {
  return (
    <div className="App">
      {/*
        In React Router, the <Route> component's element property should be passed as JSX, not as a component function.
        element={PageA} passes the function itself,
        element={<PageA />} passes the component instance, which is the result of the function call.
        Because React Router expects JSX in the element property, passing the function itself will result in an error.
      */}
      <Routes>
        <Route path="/done" element={<CompletionPage />} />
        <Route path="/survey/:surveyId/" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

/* 
  "/survey" What else is needed: Survey ID

  http://www.surveypie.com/survey?id=abc123
  http://www.surveypie.com/survey/abc123
*/
export default App;
