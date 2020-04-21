import {UPDATE_PROFILE,UPDATE_CURRENT_TAB} from './action-type';

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
            },
            {
                key:'skills',
                name:'Skills'
            }
        ]
    }
}

const rootReducer = (state = initialState, action) => {
    let newState = {...state}
     switch(action.type){
        case UPDATE_PROFILE:
            let title = action.title;
            newState.profile[title] = action.payload;
            return newState;
        case UPDATE_CURRENT_TAB:
            newState.tabs.current= action.payload;
            console.log('Updatinf curretnTab');
            console.log(action);
            return newState;

        default:
            return state;
     }
}

export default rootReducer