import React from 'react';
import { useDispatch} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {updateProfile} from '../../action';

const Profile = () =>{
    const dispatch = useDispatch();
    return(
        <div> {/*className="min-vh-100 position-fixed"*/}
                <div className="d-flex  col-lg-12 flex-column">
                        <div className="my-2 d-flex flex-column">
                            <span>First name</span>
                            <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'firstName'))} ></input>
                        </div>
                        <div className="my-2 d-flex flex-column">
                            <span>Last name</span>
                            <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'lastName'))}></input>
                        </div>
                </div>
                <hr/>
                <div className="d-flex col-lg-12 flex-column ml-2">
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 1</span>
                        <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine1'))}></input>
                        </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 2</span>
                        <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine2'))}></input>
                    </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 3</span>
                        <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine3'))}></input>
                    </div>
                </div>
                <hr/>
                <div className="d-flex col-lg-12 flex-column ml-2">
                    <div className="my-2 d-flex flex-column">
                        <span>Phone Number</span>
                        <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'phone'))}></input>
                        </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Email address</span>
                        <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'email'))}></input>
                    </div>
                </div>
        </div>
    )
}

export default Profile;