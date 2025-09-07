//import { useState } from "react";
import OptionSection from "../components/OptionSection";
import PreviewSection from "../components/PreviewSection";
import MainLayout from "../layouts/MainLayout";
//import { Col, Input, Row } from "antd";
import { Col, Row } from "antd";
//import { produce } from "immer";
import { useDispatch, useSelector } from "react-redux";
//import fetcher from "../lib/fetcher";
// import {
//   //  setTitle,
//   addQuestion,
//   moveUpQuestion,
//   moveDownQuestion,
//   deleteQuestion,
//   //  setSurvey,
// } from "../stores/survey/surveySlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import fetchSurvey from "../services/fetchSurvey";
import BuilderTitleInput from "../components/BuilderTitleInput";
import FloatingButton from "../components/FloatingButton";
import { setSelectedQuestionId } from "../stores/selectedQuestionId/selectedQuestionIdSlice";
import { setSurvey } from "../stores/survey/surveySlice";

function BuilderPage() {
  // const [data] = useState({
  //   //const [data, setData] = useState({
  //   id: 1,
  //   title: "명절 선물 선호도 조사",
  //   questions: [
  //     {
  //       title: "설날에 받고 싶은 선물은 무엇인가요? (최대 3개)",
  //       desc: "특별히 받고 싶은 선물이 없다면 선택하지 말고 넘어가세요.",
  //       type: "select",
  //       required: false,
  //       options: {
  //         max: 3,
  //         items: ["식품", "전자기기", "도서", "의류", "돈"],
  //       },
  //     },
  //     {
  //       title: "추석에 받고 싶은 선물은 무엇인가요?",
  //       desc: "특별히 받고 싶은 선물이 없다면 입력하지 말고 넘어가세요.",
  //       type: "text",
  //       required: false,
  //       options: {
  //         max: 10,
  //         placeholder: "10자 이내로 입력해주세요.",
  //       },
  //     },
  //     {
  //       title: "입력한 선물을 받고 싶은 이유가 무엇인가요? (필수)",
  //       desc: "",
  //       type: "textarea",
  //       required: true,
  //       options: {
  //         max: 100,
  //         placeholder: "100자 이내로 입력해주세요.",
  //       },
  //     },
  //   ],
  //   createdAt: 1647160914620,
  // });
  //const survey = useSelector((state) => state.survey.data);
  const error = useSelector((state) => state.survey.error);
  const loading = useSelector((state) => state.survey.loading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.surveyId) {
      dispatch(fetchSurvey(params.surveyId));
    } else {
      dispatch(
        setSurvey({
          title: "",
          questions: [],
        })
      );
      dispatch(setSelectedQuestionId(null));
    }
  }, [dispatch, params.surveyId]);

  if (error) {
    return "error";
  }
  if (loading) {
    return "loading";
  }

  return (
    <MainLayout selectedKeys={["builder"]} padding={0}>
      <Row style={{ height: "100%" }}>
        <Col flex="auto" style={{ padding: 30 }}>
          <BuilderTitleInput />
          <PreviewSection
          // addQuestion={(type) => {
          //   dispatch(addQuestion(type));
          //   // setData((state) => ({
          //   //   ...state,
          //   //   questions: [
          //   //     ...state.questions,
          //   //     {
          //   //       title: "Untitled",
          //   //       desc: "",
          //   //       type: "text",
          //   //       required: false,
          //   //       options: {
          //   //         max: 20,
          //   //         placeholder: "",
          //   //       },
          //   //     },
          //   //   ],
          //   // }));

          //   // setData(
          //   //   produce(data, (draft) => {
          //   //     draft.questions.push({
          //   //       title: "Untitled",
          //   //       desc: "",
          //   //       type: "text",
          //   //       required: false,
          //   //       options: {
          //   //         max: 20,
          //   //         placeholder: "",
          //   //       },
          //   //     });
          //   //   })
          //   // );
          // }}
          // moveUpQuestion={(index) => {
          //   if (index === 0) {
          //     return;
          //   }
          //   dispatch(moveUpQuestion(index));
          //   // setData(
          //   //   produce((draft) => {
          //   //     const tmep = draft.questions[index];
          //   //     draft.questions[index] = draft.questions[index - 1];
          //   //     draft.questions[index - 1] = tmep;
          //   //   })
          //   // );
          // }}
          // moveDownQuestion={(index) => {
          //   if (index === survey.questions.length - 1) {
          //     return;
          //   }
          //   dispatch(moveDownQuestion(index));
          //   // setData(
          //   //   produce((draft) => {
          //   //     const tmep = draft.questions[index];
          //   //     draft.questions[index] = draft.questions[index + 1];
          //   //     draft.questions[index + 1] = tmep;
          //   //   })
          //   // );
          // }}
          // deleteQuestion={(index) => {
          //   dispatch(deleteQuestion(index));
          //   // setData(
          //   //   produce((draft) => {
          //   //     draft.questions.splice(index, 1);
          //   //   })
          //   // )
          // }}
          />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
      <FloatingButton />
    </MainLayout>
  );
}

export default BuilderPage;
