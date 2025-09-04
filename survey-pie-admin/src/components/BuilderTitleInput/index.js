import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { setTitle } from "../../stores/survey/surveySlice";

function BuilderTitleInput() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.survey.data?.title || "");

  return (
    <Input
      placeholder="Please enter a survey title."
      value={title}
      onChange={(e) => {
        dispatch(setTitle(e.target.value));
        //const newData = produce(data, (draft) => {
        //  draft.title = e.target.value;
        //});

        //setData((state) => ({ ...state, title: e.target.value }));
        //setData(newData);
        // setData(
        // produce(data, (draft) => {
        // draft.title = e.target.value;
        // })
        // );
      }}
    />
  );
}

export default BuilderTitleInput;
