import React from 'react';
import Tab from './Tab';
import Row from 'react-bootstrap/Row';
const TabBar = (props) => {
    return(
        <Row className=" d-flex mx-auto my-4 col-lg-12">
            {props.tabs.map((tab) =>
            <Tab tab={tab.name} id={tab.key} key={tab.key}  />
            )}
        </Row>
    );
};

export default TabBar;