import {ADD_EDUCATION,UPDATE_CURRENT_EDUCATION,REMOVE_EDUCATION,UPDATE_EDUCATION } from '../action-type';

const initalState = {
    heading:'education',
        current:'0',
        items:[]
};

const educationReducer = (state = initalState, action) => {
    let newState;
    switch(action.type){
        case ADD_EDUCATION:
            newState ={
                ...state,
                current:action.payload.id,
                items:[
                    ...state.items,
                    action.payload
                ]
            };
            return newState;
        case UPDATE_CURRENT_EDUCATION:
            newState = {...state,
                current:action.payload
            };
            return newState;
        case UPDATE_EDUCATION:
           let newArray = state.items.slice();
            newArray[Number(action.payload.id)] = action.payload;
            newState={
                ...state,
                items:newArray
            };
            return newState;
        case REMOVE_EDUCATION:
                // requires major refracting
                if (action.payload === '0' && state.items.length ===1){
                    newState = {
                        current:'0',
                        items:[]
                    }
                }
                else{
                    newState={...state,
                        items:[
                            ...state.items.slice(0, action.payload),
                            ...state.items.slice(Number(action.payload) + 1)
                        ]
                    };
                    let updateArray = Array.from(newState.items);
                    updateArray.forEach((item)=>{
                        if(item.id >action.payload){
                            item.id = (Number(item.id) -1).toString()
                        }});
                    newState ={...newState,
                        items:updateArray
                    };
                    if(newState.current === action.payload)
                    {
                        if(newState.items.length !==0 ){
                        newState={
                                ...newState,
                                current:newState.items[0].id
                            };
                        }
                        else{
                            newState={
                                ...state,
                                current:'0'
                            };
                        }
                    }
                }
                return newState;
        default:
            return state;
    }
};

export default educationReducer;