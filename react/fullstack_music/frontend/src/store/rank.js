let defaultState = {
  ranklist: [],
};

const reducer = (state = defaultState,action) => {
  switch(action.type){
    case 'CHANGE_RANKLIST':
        return {
          ...state,
          ranklist:action.data
        }
    break;
  }
  return state
};

export default reducer;