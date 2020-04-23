import {UPDATE_PROFILE,UPDATE_CURRENT_TAB,UPDATE_CURRENT_EDUCATION,ADD_EDUCATION} from './action-type';

const initialState ={
    profile :{
        heading :'profile',
        firstName: '',
        lastName: '',
        addressLine1 : '',
        addressLine2: '',
        addressLine3:'',
        phone:'',
        email:''

    },
    education :{
        heading:'education',
        current:'0',
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
    let newState;
     switch(action.type){
        case UPDATE_PROFILE:
            let title = action.title;
            newState = {...state,profile:{
                ...state.profile,
                [title]:action.payload
            }}
            return newState;
        case UPDATE_CURRENT_TAB:
            newState ={...state,tabs:{
                ...state.tabs,
                current:action.payload
            }}
            return newState;
        case UPDATE_CURRENT_EDUCATION:
            newState = {...state,education:{
                ...state.education,
                current:action.payload
            }}
            return newState;
        case ADD_EDUCATION:
            newState ={...state,education:{
                ...state.education,
                current:action.payload.id,
                items:[
                    ...state.education.items,
                    action.payload
                ]
            }}
            return newState;
        default:
            return state;
     }
}

export default rootReducer;