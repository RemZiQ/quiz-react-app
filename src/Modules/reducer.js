const initialState = {
  input: [],
  answers: [1, 2, 3],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT':
      return { ...state, ...{ input: [...state.input, action.value] } };
    default: return state;
  }
}

export default reducer;
