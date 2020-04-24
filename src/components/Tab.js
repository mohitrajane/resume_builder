import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateCurrentTab} from '../action';

const  Tab = (props) => {
    const dispatch = useDispatch();
    const currentTab = useSelector(state => state.tabs.current)
    return(
        //style={{'fontSize':'1.2rem'}}
        <div className="m-1" onClick={(event) => dispatch(updateCurrentTab(event.target.id))}>
            {props.id === currentTab? <span id={props.id} className="badge p-2 badge-primary btn mx-1">{props.tab}</span> : <span id={props.id} className="badge mx-1 p-2 badge-light font-weight-normal">{props.tab}</span>}
        </div>
    )
}
export default Tab;