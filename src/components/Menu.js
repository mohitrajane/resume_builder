import React from 'react';
import {useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import TabBar from './TabBar';
import Profile from "./tabs/Profile";
import Education from "./tabs/Education";
import Experience from "./tabs/Experience";
import Skills from "./tabs/Skills";
import {saveAsPdf} from "../utils.js"

const Menu = () =>{
    const tabs = useSelector(state => state.tabs.items);
    const currentTab = useSelector(state => state.tabs.current);
    const renderTab = () =>{
        switch(currentTab){
            case 'profile':
                return <Profile />
            case 'education':
                return <Education/>
            case 'experience':
                return <Experience/>
            case 'skills':
                return <Skills/>
            default:
                return null;
        }
    };
    return(
        //position-fixed
        <div className="min-vh-100 sticky-top" style={{'minWidth':'25%'}}>
                <TabBar currentTab={currentTab} tabs={tabs}/>
                <div className="min-vh-100 d-flex flex-column">
                    {renderTab()}
                    <Button className="sticky-top w-75 mx-auto m-5" onClick={saveAsPdf}>Generate PDF</Button>
                </div>
        </div>
    )
}

export default Menu;