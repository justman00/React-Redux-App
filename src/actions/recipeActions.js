export const fetchRecipies = (query) => (dispatch) => {
  dispatch({ type: "FETCH_START" });

  fetch(
    `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${query}`
  )
    .then((result) => result.json())
    .then((recipies) => {
      console.log("recipies", recipies);
      dispatch({ type: "FETCH_RECIPIES_SUCCESS", payload: recipies.results });
    })
    .catch((err) => {
      dispatch({
        type: "FETCH_RECIPIES_FAILURE",
        payload:
          "Sorry, your request didn't return any result.Please,try again.",
      });
    });
};
