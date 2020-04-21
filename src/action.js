import {UPDATE_PROFILE} from './action-type';

export const  updateProfile = (payload, title) =>(
    
        {type:UPDATE_PROFILE,
        payload,
        title}
);
