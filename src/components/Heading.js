import React from "react";
import pic from '../images/lsmith-profile-pic.png'

function Heading() {
    return (
        <header>
            <img src={pic} className="profile-pic"></img>
            <h2>Lauren Smith</h2>
            <h4>Frontend Developer</h4>
            <p>laurensmith.website</p>
        </header>
    )
}

export default Heading;