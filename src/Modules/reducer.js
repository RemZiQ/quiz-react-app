import { questions, answers } from '../config';


const initialState = {
  answers: new Array(questions.length).fill(null),
  rightAnswers: answers,
  questions,
  questionNumber: 0,
  countOnAnswers: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT': {
      const newAnswers = [...state.answers];
      newAnswers[state.questionNumber] = action.answer;
      return { ...state, ...{ answers: newAnswers } };
    }
    case 'NEXT_QUEUE':
      return { ...state, ...{ questionNumber: state.questionNumber + 1 } };
    case 'PREV_QUEUE':
      return { ...state, ...{ questionNumber: state.questionNumber - 1 } };
    case 'ANSWER_INCREMENT':
      return { ...state, ...{ countOnAnswers: state.countOnAnswers + 1 } };
    case 'RELOAD_APP':
      return { ...initialState };
    default: return state;
  }
}

export default reducer;

// return { ...state, ...{ answers: initialState.answers } };
