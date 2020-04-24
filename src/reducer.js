import {UPDATE_PROFILE,UPDATE_CURRENT_TAB,UPDATE_CURRENT_EDUCATION,ADD_EDUCATION, UPDATE_CURRENT_EXPERIENCE, ADD_EXPERIENCE,ADD_SKILL,REMOVE_EDUCATION,REMOVE_EXPERIENCE,UPDATE_EXPERIENCE,UPDATE_EDUCATION} from './action-type';

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

        // heading :'profile',
        // firstName: 'Mohit',
        // lastName: 'Rajan',
        // addressLine1 : 'Edacheril house',
        // addressLine2: 'Behind csb',
        // addressLine3:'Kunnumpuram,Kakkanad',
        // phone:'+919037969499',
        // email:'mhit98@gmail.com'

    },
    education :{
        heading:'education',
        current:'0',
        items:[
            // {
            //     id:'0',
            //     institution:'FISAT',
            //     start:'AUG 2016',
            //     end:'AUG 2020',
            //     degree:'B.Tech'
            // },
            // {
            //     id:'1',
            //     institution:'FISAT',
            //     start:'AUG 2020',
            //     end:'AUG 2022',
            //     degree:'M.Tech'
            // },
        ] // {institution:'',start:'',end: '',degree: ''}
    },
    experience:{
        heading:'experience',
        current:'0',
        items :[
            // {
            //     id:'0',
            //     company:'impress',
            //     start:'Jan 2020',
            //     end:'Dec 2022',
            //     designation:'Jr Software developer'
            // },
            // {
            //     id:'1',
            //     company:'J&D',
            //     start:'Jan 2023',
            //     end:'Dec 2025',
            //     designation:'Sr Software developer'
            // }
        ] //company:'',start:'',end:'',designation:''

    },
    skills:{
        heading:'skills',
        items:[]
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
            }
        ]
    }
}

const rootReducer = (state = initialState, action) => {
    let newState;
    let newArray;
     switch(action.type){
        case UPDATE_PROFILE:
            let title = action.title;
            newState = {...state,profile:{
                ...state.profile,
                [title]:action.payload
            }};
            return newState;
        case UPDATE_CURRENT_TAB:
            newState ={...state,tabs:{
                ...state.tabs,
                current:action.payload
            }};
            return newState;
        case UPDATE_CURRENT_EDUCATION:
            newState = {...state,education:{
                ...state.education,
                current:action.payload
            }};
            return newState;
        case ADD_EDUCATION:
            newState ={...state,education:{
                ...state.education,
                current:action.payload.id,
                items:[
                    ...state.education.items,
                    action.payload
                ]
            }};
            return newState;
        case UPDATE_CURRENT_EXPERIENCE:
            newState = {...state,experience:{
                ...state.experience,
                current:action.payload
            }};
            return newState;
        case ADD_EXPERIENCE:
            newState ={...state,experience:{
                ...state.experience,
                current:action.payload.id,
                items:[
                    ...state.experience.items,
                    action.payload
                ]
            }};
            return newState;
        case ADD_SKILL:
            newState ={...state,skills:{
                ...state.skills,
                items:action.payload
            }};
            return newState;
        case REMOVE_EDUCATION:
            // requires major refracting
            if (action.payload === '0' && state.education.items.length ===1){
                newState = {...state,education:{
                    current:'0',
                    items:[]
                }}
            }
            else{
                newState={...state,education:{
                    ...state.education,
                    items:[
                        ...state.education.items.slice(0, action.payload),
                        ...state.education.items.slice(Number(action.payload) + 1)
                    ]
                }};
                let updateArray = Array.from(newState.education.items);
                updateArray.forEach((item)=>{
                    if(item.id >action.payload){
                        item.id = (Number(item.id) -1).toString()
                    }});
                newState ={...newState,education:{
                    ...newState.education,
                    items:updateArray
                }};
                if(newState.education.current === action.payload)
                {
                    if(newState.education.items.length !==0 ){
                    newState={
                        ...newState,education:{
                            ...newState.education,
                            current:newState.education.items[0].id
                        }
                    }}
                    else{
                        newState={
                            ...state,education:{
                                ...state.education,
                                current:'0'
                            }
                        }
                    }
                }
            }
            return newState;
        case UPDATE_EXPERIENCE:
            newArray = state.experience.items.slice();
            newArray[Number(action.payload.id)] = action.payload;
            newState={...state,experience:{
                ...state.experience,
                items:newArray
            }}
            return newState;
        case UPDATE_EDUCATION:
            newArray = state.education.items.slice();
            newArray[Number(action.payload.id)] = action.payload;
            newState={...state,education:{
                ...state.education,
                items:newArray
            }}
            return newState;
        default:
            return state;
     }
}

export default rootReducer;