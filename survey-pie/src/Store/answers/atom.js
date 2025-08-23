import { atom } from 'recoil';

const answerState = atom({
  key: 'answerState',
  default: [],
});

export default answerState;
