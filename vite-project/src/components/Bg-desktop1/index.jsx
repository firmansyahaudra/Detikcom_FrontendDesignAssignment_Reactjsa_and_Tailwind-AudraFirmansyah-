import React from "react"; 
import background1 from "../../assets/background1.png"
import logob from "../../assets/logob.png"


const BackgroundDesktop = (props) => {
    return (
<div className="relative ">
            {/* Logo on top of the background */}
            <img className="w-1/2 h-2/5 absolute mt-48 left-24 " src={logob} alt="" />

            {/* Background image */}
            <img className="w-screen h-screen" src={background1} alt="" />
        </div>
    )
}

export default BackgroundDesktop;