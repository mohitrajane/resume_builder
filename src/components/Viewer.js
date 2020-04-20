import React from 'react'
function Viewer(){
    const a4Style ={
        width: "21cm",
        'height': "29.6cm",
    };
    return(
        <div className="min-vh-100 w-100">
            <div style={a4Style} className="shadow mx-auto my-5">

            </div>
           
        </div>
    )
}

export default Viewer;