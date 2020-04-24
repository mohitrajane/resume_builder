import {ADD_SKILL} from "../action-type";
const initialState={
    heading:'skills',
    items:[]
};

const skillReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_SKILL:
            let newState ={
                ...state,
                items:action.payload
            };
            return newState;
        default:
            return state;
    }
};

export default skillReducer;