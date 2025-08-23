import { selector } from 'recoil';
import questionsState from './atom';

const questionsLengthState = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    const qeustions = get(questionsState);

    return qeustions.length;
  },
});

export default questionsLengthState;
