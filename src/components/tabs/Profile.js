import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../action';
import Skills from "./Skills";

const Profile = () =>{
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    return(
        <div> {/*className="min-vh-100 position-fixed"*/}
                <div className="d-flex  col-lg-10 mx-auto flex-column">
                        <div className="my-2 d-flex flex-column">
                            <span>First name</span>
                            <input type="text" placeholder="Jane" value={profile.firstName?profile.firstName:undefined} onChange={(e) => dispatch(updateProfile(e.target.value,'firstName'))} ></input>
                        </div>
                        <div className="my-2 d-flex flex-column">
                            <span>Last name</span>
                            <input type="text" placeholder="Doe" value={profile.lastName?profile.lastName:undefined} onChange={(e) => dispatch(updateProfile(e.target.value,'lastName'))}></input>
                        </div>
                </div>
                <hr/>
                <div className="d-flex col-lg-10 mx-auto flex-column">
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 1</span>
                        <input type="text" placeholder="House no" value={profile.addressLine1?profile.addressLine1:undefined} onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine1'))}></input>
                        </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 2</span>
                        <input type="text" placeholder="Lane/location" value={profile.addressLine2?profile.addressLine2:undefined} onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine2'))}></input>
                    </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Address Line 3</span>
                        <input type="text" placeholder="City" value={profile.addressLine3?profile.addressLine3:undefined} onChange={(e) => dispatch(updateProfile(e.target.value,'addressLine3'))}></input>
                    </div>
                </div>
                <hr/>
                <div className="d-flex col-lg-10 mx-auto flex-column">
                    <div className="my-2 d-flex flex-column">
                        <span>Phone Number</span>
                        <input type="text" placeholder="+91 xxxx xxx xxx" value={profile.phone?profile.phone:undefined}  onChange={(e) => dispatch(updateProfile(e.target.value,'phone'))}></input>
                        </div>
                    <div className="my-2 d-flex flex-column">
                        <span>Email address</span>
                        <input type="text" placeholder="jane.doe@provider.com" value={profile.email?profile.email:undefined}  onChange={(e) => dispatch(updateProfile(e.target.value,'email'))}></input>
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