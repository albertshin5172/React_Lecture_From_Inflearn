import styled from "styled-components";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, InputNumber, Switch } from "antd";
import { setQuestion } from "../../stores/survey/surveySlice";

const { Item } = Form;

const groups = [
  {
    title: "Common Options",
    fields: [
      {
        label: "Question",
        name: "title",
        rules: [{ required: true }],
        type: "text",
      },
      {
        label: "Description",
        name: "desc",
        rules: [{ required: true }],
        type: "text",
      },
      {
        label: "Required",
        name: "required",
        rules: [],
        type: "switch",
        valuePropName: "checked",
      },
    ],
  },
];

const detailFieldsMap = {
  text: [
    {
      label: "Placeholder",
      name: "placeholder",
      rules: [{ required: false }],
      type: "text",
    },
    {
      label: "최대 입력 길이",
      name: "max",
      rules: [{ required: false }],
      type: "number",
    },
  ],
  textarea: [
    {
      label: "Placeholder",
      name: "placeholder",
      rules: [{ required: false }],
      type: "text",
    },
    {
      label: "최대 입력 길이",
      name: "max",
      rules: [{ required: false }],
      type: "number",
    },
  ],
  select: [
    {
      label: "답변",
      name: "items",
      rules: [{ required: true }],
      type: "text",
    },
    {
      label: "최대 선택 가능 개수",
      name: "max",
      rules: [{ required: false }],
      type: "number",
    },
  ],
};

const getFieldInput = (type) => {
  if (type === "text") return <Input />;
  else if (type === "switch") return <Switch />;
  else if (type === "number") return <InputNumber />;

  return null;
};

function OptionSection() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data]
  );
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data
  );

  useEffect(() => {
    if (!question) return;

    const type = question.type;
    const detailFieldsValue = {};
    if (type === "text" || type === "textarea") {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.placeholder = question.options.placeholder;
    } else if (type === "select") {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.items = question.options.items.join(";");
    }

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
      ...detailFieldsValue,
    });
  }, [form, question]);

  const mergedGroups = question
    ? [
        ...groups,
        {
          title: "Detailed options",
          fields: detailFieldsMap[question.type],
        },
      ]
    : [];

  return (
    <OptionSectionWrapper>
      <FormWrapper>
        <Title>Question options</Title>
        {question ? (
          <Form form={form} layout={"vertical"} name="option-form">
            {mergedGroups.map((group, index) => (
              <Fragment key={index}>
                <SubTitle>{group.title}</SubTitle>
                {group.fields.map((field, index) => (
                  <Item key={index} {...field}>
                    {getFieldInput(field.type)}
                  </Item>
                ))}
              </Fragment>
            ))}

            {/* <SubTitle>Common Options</SubTitle>
            <Item label="Question" name="title" rules={[{ required: true }]}>
              <Input />
            </Item>
            <Item label="Description" name="desc" rules={[{ required: true }]}>
              <Input />
            </Item>
             */}
            <Form.Item>
              <Button
                type="primary"
                onClick={() => {
                  // console.log(
                  //   form.getFieldValue({
                  //     title: question.title,
                  //     desc: question.desc,
                  //   })
                  // );

                  //const values = form.getFieldValue();
                  const { title, desc, required, ...options } =
                    form.getFieldValue();
                  //console.log(values);
                  const values = {
                    title,
                    desc,
                    required,
                    options,
                    type: question.type,
                  };

                  if (
                    values.type === "select" &&
                    typeof values.options.items === "string"
                  ) {
                    values.options.items = values.options.items.split(";");
                  }

                  dispatch(
                    setQuestion({ index: selectedQuestionId, data: values })
                  );
                  // dispatch(
                  //   setQuestion({ index: selectedQuestionId, data: values })
                  // );
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          "Please select a question."
        )}
      </FormWrapper>
    </OptionSectionWrapper>
  );
}

const OptionSectionWrapper = styled.div`
  height: 100%;
  background: #ffffff;
  border-left: 1px solid #dddddd;
`;
const Title = styled.div`
  font-weight: 500;
  background: #f0f0f0;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  text-align: center;
`;
const SubTitle = styled.div`
  font-size: 1.03rem;
  font-weight: 600;
  margin: 10px 0;
`;
const FormWrapper = styled.div`
  padding: 20px;
`;
export default OptionSection;
