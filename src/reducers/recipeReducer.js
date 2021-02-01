const initialState = {
  loading: false,
  error: "",
  recipies: [],
};

export const recipeReducer = (state = initialState, action) => {
  //console.log("action", action);
  switch (action.type) {
    case "FETCH_RECIPIES":
      return { ...state, recipies: action.payload };
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_RECIPIES_SUCCESS":
      return { ...state, loading: false, recipies: action.payload, error: "" };
    case "FETCH_RECIPIES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
