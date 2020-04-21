import React from 'react';
import TabBar from './TabBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../action';

const Menu = () =>{
    const tabs = useSelector(state => state.tabs.items);
    const currentTab = useSelector(state => state.tabs.current);
    const dispatch = useDispatch();
    return(
        <div className="min-vh-100 position-fixed">
                <TabBar currentTab={currentTab} tabs={tabs}/>
                <div className="d-flex  col-lg-3 flex-column">
                        <div className="mb-2 d-flex flex-column">
                            <span>First name</span>
                            <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'firstName'))} ></input>
                        </div>
                        <div>
                            <span>Last name</span>
                            <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'lastName'))}></input>
                        </div>
                        <hr/>
                </div>
                <div>
                    <Row lg={3} className="d-flex flex-column ml-2">
                        <Col className="mb-2">
                            <span>Address Line 1</span>
                            <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine1'))}></input>
                        </Col>
                        <Col className="mb-2">
                            <span>Address Line 2</span>
                            <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine2'))}></input>
                        </Col>
                        <Col>
                            <span>Address Line 3</span>
                            <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine3'))}></input>
                        </Col>
                    </Row>
                    <hr/>
            </div>
        </div>
    )
}

export default Menu;