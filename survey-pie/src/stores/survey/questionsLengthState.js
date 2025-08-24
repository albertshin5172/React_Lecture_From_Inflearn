import { selector } from 'recoil';
import questionsState from './surveyState';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    const qeustions = get(questionsState).questions;

    return qeustions.length;
  },
});

export default questionsLengthState;
