import {UPDATE_PROFILE,UPDATE_CURRENT_TAB,UPDATE_CURRENT_EDUCATION,ADD_EDUCATION,UPDATE_CURRENT_EXPERIENCE,ADD_EXPERIENCE,ADD_SKILL,REMOVE_EDUCATION} from './action-type';

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

export const updateCurrentExperience = (payload) =>(
    {
        type:UPDATE_CURRENT_EXPERIENCE,
        payload
    }
);
export const addEducation = (payload) =>(
    {
        type:ADD_EDUCATION,
        payload
    }
);

export const addExperience = (payload) =>(
    {
        type:ADD_EXPERIENCE,
        payload
    }
);

export const addSkill = (payload) =>(
    {
        type:ADD_SKILL,
        payload
    }
);

export const removeEducation = (payload) =>(
    {
        type:REMOVE_EDUCATION,
        payload
    }
)