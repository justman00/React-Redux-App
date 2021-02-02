 import {FETCH_GAMES_SUCCESS,FETCH_START,FETCH_GAMES_FAILURE} from "../actions"


const initialState ={
    loading: false,
    error:'',
    games:[]
    

}


export const titleReducer = (state = initialState,action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state , games: action.payload};
        case FETCH_START:
            return {...state , loading: true };
        case FETCH_GAMES_SUCCESS:
            return {...state , loading: false , games:action.payload , error: ""};
        case FETCH_GAMES_FAILURE:
            return{...state , loading: false , error:action.payload};
       
        
        default:
            return state;
    }   
}