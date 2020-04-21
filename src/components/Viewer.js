import React from 'react';
import {useSelector} from 'react-redux';

function Viewer(){
    const a4Style ={
        width: "21cm",
        'height': "29.6cm",
    };
    // const profile = useSelector(state => state.profile);
    const firstName = useSelector(state => state.profile.firstName);
    const lastName = useSelector(state => state.profile.lastName);
    const addressLine1 = useSelector(state => state.profile.addressLine1);
    const addressLine2 = useSelector(state => state.profile.addressLine2);
    const addressLine3 = useSelector(state => state.profile.addressLine3);


    return(
        <div className="min-vh-100 w-100">
            <div style={a4Style} className="shadow mx-auto my-5">
            <div>
                profile: <p>{firstName}</p>
                lastNAme: <p>{lastName}</p>
                addredd1 : <p>{addressLine1}</p>
                addredd2 : <p>{addressLine2}</p>
                addredd3 : <p>{addressLine3}</p>

            </div>
            </div>
           
        </div>
    )
}

export default Viewer;