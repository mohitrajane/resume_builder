import {combineReducers} from 'redux';
import profileReducer from "./profile";
import educationReducer from "./education";
import experienceReducer from "./experience";
import tabsReducer from "./tabs";
import skillReducer from "./skills";

const rootReducer  = combineReducers({
    profile:profileReducer,
    education:educationReducer,
    experience:experienceReducer,
    tabs:tabsReducer,
    skills:skillReducer
});

export default rootReducer;
