export const FETCH_START = "FETCH_START";
export const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS";
export const FETCH_GAMES_FAILURE = "FETCH_GAMES_FAILURE";



export const fetchGames = (query) => (dispatch) => {
   dispatch({type: FETCH_START});

   fetch(`https://www.cheapshark.com/api/1.0/deals?title=${query}`)
   .then(res => res.json())
   .then((games) => {
       console.log(games);
    dispatch({type: FETCH_GAMES_SUCCESS , payload: games});
   })
   .catch(err => {
    dispatch({type: FETCH_GAMES_FAILURE , payload: 'Something went wrong. Please try again'})
   })
};

