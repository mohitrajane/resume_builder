import {UPDATE_PROFILE} from './action-type';

const initialState ={
    profile :{
        heading :'profile',
        firstName: '',
        lastName: '',
        addressLine1 : '',
        AddressLine2: '',
        AddressLine3:'',
        phone:'',
        email:''

    },
    education :{
        heading:'education',
        items:[] // {institution:'',start:'',end: '',degree: ''}
    },
    experience:{
        heading:'experience',
        items :[] //company:'',start:'',end:'',designation:''

    },
    skills:{
    },
    tabs:{
        current:'Profile',
        items :['Profile','Education','Experience','Skills']
    }
}

const rootReducer = (state = initialState, action) => {
     switch(action.type){
        case UPDATE_PROFILE:
            let newState = {...state};
            let title = action.title;
            newState.profile[title] = action.payload;
            // return Object.assign({},state,{
                // stafirstName:action.payload
            // })
            return newState;
        default:
            return state
     }
}

export default rootReducer