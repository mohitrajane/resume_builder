import {UPDATE_PROFILE,UPDATE_CURRENT_TAB} from './action-type';

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
