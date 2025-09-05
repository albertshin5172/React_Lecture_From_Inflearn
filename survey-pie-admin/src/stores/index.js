import { configureStore } from "@reduxjs/toolkit";
import surveySlice from "./survey/surveySlice";
import thunk from "./middleware/thunk";
import selectedQuestionIdReducer from "./selectedQuestionId/selectedQuestionIdSlice";

export default configureStore({
  reducer: {
    survey: surveySlice, // use the reducer function, not the whole slice
    selectedQuestionId: selectedQuestionIdReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
