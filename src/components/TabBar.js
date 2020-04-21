import React from 'react'
import Tab from './Tab'
import Row from 'react-bootstrap/Row'
const TabBar = (props) => {
    // used id instead of key casue couldnt pass it to Tab from TabBar cause used internally???
    return(
        <Row className="ml-2 mt-2 mb-1">
            {props.tabs.map((tab) =>
            <Tab tab={tab.name} id={tab.key} key={tab.key}  />
            )}
        </Row>
    )
}

export default TabBar;