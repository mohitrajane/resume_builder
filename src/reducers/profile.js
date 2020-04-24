import {UPDATE_PROFILE} from '../action-type';

const initialState ={
    heading :'profile',
    firstName: '',
    lastName: '',
    addressLine1 : '',
    addressLine2: '',
    addressLine3:'',
    phone:'',
    email:''
};

const profileReducer = (state= initialState, action) =>{
    switch(action.type){
       case UPDATE_PROFILE:
            let newState;
           let title = action.title;
           newState = {...state,
               [title]:action.payload
           }
           return newState;
        default:
            return state;
    };
};

export default profileReducer;