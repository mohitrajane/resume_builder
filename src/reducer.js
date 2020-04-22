import {UPDATE_PROFILE,UPDATE_CURRENT_TAB,UPDATE_CURRENT_EDUCATION} from './action-type';

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
        current:'default',
        items:[
            // {
            //     id:'0',
            //     institution:'FISAT',
            //     start:'Jan 2016',
            //     end:'Aug 2020',
            //     degree:'B.tech'
            // },
            // {
            //     id:'1',
            //     institution:'AAAA',
            //     start:'Jan 2016',
            //     end:'Aug 2020',
            //     degree:'B.tech'
            // },
        ] // {institution:'',start:'',end: '',degree: ''}
       
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
            return newState;
        case UPDATE_CURRENT_EDUCATION:
            newState.education.current = action.payload;
            return newState;
        default:
            return state;
     }
}

export default rootReducer