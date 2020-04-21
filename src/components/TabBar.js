import React from 'react'
import Tab from './Tab'
import Row from 'react-bootstrap/Row'
const TabBar = (props) => {
    return(
        <Row className="ml-2 mt-2 mb-1">
            {props.tabs.map((tab) =>
            props.currentTab === tab.name ?
            <Tab key={tab.key} tab={tab.name} current={true} />:
            <Tab key={tab.key} tab={tab.name} current={false} />
            )}
        </Row>
    )
}

export default TabBar;