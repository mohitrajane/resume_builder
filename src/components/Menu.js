import React from 'react'
import TabBar from './TabBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Menu(){
    let tabs = ['profile','Education','Experience','Skills']
    return(
        <div className="min-vh-100 position-fixed">
                <TabBar currentTab={'profile'} tabs={tabs}/>
                <div class="d-flex  col-lg-3 flex-column">
                    {/* <Row className="ml-2 mt-2">
                        <Col className="mb-2">
                            <span>First name</span>
                            <input type="text"></input>
                        </Col>
                        <Col>
                            <span>Last name</span>
                            <input type="text"></input>
                        </Col>
                    </Row> */}
                        <div className="mb-2 d-flex flex-column">
                            <span>First name</span>
                            <input type="text"></input>
                        </div>
                        <div>
                            <span>Last name</span>
                            <input type="text"></input>
                        </div>
                        <hr/>
                </div>
                <div>
                    <Row lg={3} className="d-flex flex-column ml-2">
                        <Col className="mb-2">
                            <span>Address Line 1</span>
                            <input type="text"></input>
                        </Col>
                        <Col className="mb-2">
                            <span>Address Line 2</span>
                            <input type="text"></input>
                        </Col>
                        <Col>
                            <span>Address Line 3</span>
                            <input type="text"></input>
                        </Col>
                    </Row>
                    <hr/>
            </div>
        </div>
    )
}

export default Menu