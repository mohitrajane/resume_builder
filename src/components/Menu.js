import React from 'react';
import TabBar from './TabBar';
import {useSelector} from 'react-redux';
import Profile from "./tabs/Profile";

const Menu = () =>{
    const tabs = useSelector(state => state.tabs.items);
    const currentTab = useSelector(state => state.tabs.current);
    const renderTab = () =>{
        switch(currentTab){
            case 'profile':
                return <Profile />
            default:
                return null;
        }
    };
    return(
        <div className="min-vh-100 position-fixed">
                <TabBar currentTab={currentTab} tabs={tabs}/>
                <div>{renderTab()}</div>
        </div>
    )
}

export default Menu;