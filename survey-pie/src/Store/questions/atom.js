import { atom } from 'recoil';

const questionsState = atom({
  key: 'questionsState',
  default: [
    {
      title: 'This is Question 1.',
      desc: 'This is description 1.',
      type: 'text',
      required: false,
      options: {
        placeholder: 'This is a placeholder.',
      },
    },
    {
      title: 'This is Question 2.',
      desc: 'This is description 2.',
      type: 'textarea',
      required: true,
      options: {
        placeholder: 'This is a placeholder.',
      },
    },
    {
      title: 'This is Question 3.',
      desc: 'This is description 3.',
      type: 'select',
      required: true,
      options: {
        items: ['Answer1', 'Answer2', 'Answer3', 'Answer4', 'Answer5'],
      },
    },
  ],
});

export default questionsState;
