import { Route, Routes } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      {/*
        In React Router, the <Route> component's element property should be passed as JSX, not as a component function.
        element={PageA} passes the function itself,
        element={<PageA />} passes the component instance, which is the result of the function call.
        Because React Router expects JSX in the element property, passing the function itself will result in an error.
      */}
      <AppWrapper>
        <Box>
          <Routes>
            <Route path="/done/:surveyId" element={<CompletionPage />} />
            <Route path="/survey/:surveyId" element={<SurveyPage />}>
              <Route path=":step" element={<SurveyPage />} />
            </Route>
          </Routes>
        </Box>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

/* 
  "/survey" What else is needed: Survey ID

  http://www.surveypie.com/survey?id=abc123
  http://www.surveypie.com/survey/abc123
*/
export default App;
