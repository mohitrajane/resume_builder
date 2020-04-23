import React from 'react';
import { useDispatch} from 'react-redux';
import {updateProfile} from '../../action';
import Skills from "./Skills";

const Profile = () =>{
    const dispatch = useDispatch();
    return(
        <div> {/*className="min-vh-100 position-fixed"*/}
                <div className="d-flex  col-lg-10 mx-auto flex-column">
                        <div className="my-2 d-flex flex-column">
                            <span>First name</span>
                            <input type="text" placeholder="Jane" onChange={(e) => dispatch(updateProfile(e.target.value,'firstName'))} ></input>
                        </div>
                        <div className="my-2 d-flex flex-column">
                            <span>Last name</span>
                            <input type="text" placeholder="Doe" onChange={(e) => dispatch(updateProfile(e.target.value,'lastName'))}></input>
                        </div>
                </div>
                <hr/>
                <div className="d-flex col-lg-10 mx-auto flex-column">
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 1</span>
                        <input type="text" placeholder="House no" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine1'))}></input>
                        </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 2</span>
                        <input type="text" placeholder="Lane/location" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine2'))}></input>
                    </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 3</span>
                        <input type="text" placeholder="City" onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine3'))}></input>
                    </div>
                </div>
                <hr/>
                <div className="d-flex col-lg-10 mx-auto flex-column">
                    <div className="my-2 d-flex flex-column">
                        <span>Phone Number</span>
                        <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'phone'))}></input>
                        </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Email address</span>
                        <input type="text" onChange={(e) => dispatch(updateProfile(e.target.value,'email'))}></input>
                    </div>
                </div>
                <hr/>
                <div className="d-flex col-lg-10 mx-auto flex-column">
                    <div className="my-2 d-flex flex-column">
                        <span>Skills</span>
                        <Skills/>
                        </div>
                </div>
        </div>
    )
}

export default Profile;