const defaultState = {
  artists: [
    ]
}
const reducer = (state=defaultState,action) => {
    switch (action.type) {
        case "CHANGE_SINGERLIST":
          return {
            ...state,
            artists: action.data,
          };
      }
    return state
}

export default reducer