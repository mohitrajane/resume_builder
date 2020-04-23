import React from 'react';
import {useSelector} from 'react-redux';

function Viewer(){
    const a4Style ={
        width: "21cm",
        'height': "29.6cm",
    };
    const profile = useSelector(state => state.profile);
    const education = useSelector(state =>state.education.items)


    return(
        <div className="min-vh-100 w-100">
            <div style={a4Style} className="shadow mx-auto my-5">
            <div>
                profile: <p>{profile.firstName}</p>
                lastNAme: <p>{profile.lastName}</p>
                addredd1 : <p>{profile.addressLine1}</p>
                addredd2 : <p>{profile.addressLine2}</p>
                addredd3 : <p>{profile.addressLine3}</p>
                email : <p>{profile.email}</p>

            </div>
            <div>
                {education.map((item)=>(
                    <p>
                        name:{item.institution}
                        start:{item.start}
                        end:{item.end}
                        degree:{item.degree}
                    </p>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Viewer;