import { GET_NEW_ALBUM } from "./constant";

const initialState = {
    currentSearch: [],
};

export const searchReducer = ( state = initialState, action) =>{
    switch (action.type){
        case GET_NEW_ALBUM:
            return{
                ...state,
                currentSearch: action.payload
            };
        default:
            return state;
    }
};