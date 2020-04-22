import {UPDATE_PROFILE,UPDATE_CURRENT_TAB,UPDATE_CURRENT_EDUCATION} from './action-type';

export const  updateProfile = (payload, title) =>(
    
        {type:UPDATE_PROFILE,
        payload,
        title}
);

export const updateCurrentTab = (payload) =>(
    {
        type:UPDATE_CURRENT_TAB,
        payload
    }
);

export const updateCurrentEducation = (payload) =>(
    {
        type:UPDATE_CURRENT_EDUCATION,
        payload
    }
);
