import {UPDATE_CURRENT_TAB} from "../action-type";
const initialState = {
    current:'profile',
        items :[
            {
                key:'profile',
                name:'Profile'
            },
            {
                key:'education',
                name:'Education'
            },
            {
                key:'experience',
                name:'Experience'
            }
        ]
};

const tabsReducer = (state = initialState, action) =>{
        switch(action.type){
            case UPDATE_CURRENT_TAB:
                let newState ={...state,
                    current:action.payload
                };
                return newState;
            default:
                return state;
        }
};

export default tabsReducer;