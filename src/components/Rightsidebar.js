import React from 'react'

export default function Rightsidebar() {
  return (
    <>
    
    <div className="rightsidebarsuggsection">
        <div id="rsbheading">
            <p>Suggestions for you</p>
        </div>
        <div id='suggested' >
            <div id="suggprofile">
                <div className="suggpp">
                    <img className='suggppr' src="images/leah.jpg" alt="" />
                </div>
                <div className="suggname">
                    <p>Leah Gotti </p>
                </div>
            </div>

            <div id="suggprofile">
                <div className="suggpp">
                    <img className='suggppr' src="images/bhavesh.jpg" alt="" />
                </div>
                <div className="suggname">
                    <p>Bhavesh Patel</p>
                </div>
            </div>

            <div id="suggprofile">
                <div className="suggpp">
                    <img className='suggppr' src="images/andrew.jpg" alt="" />
                </div>
                <div className="suggname">
                    <p>Andrew Garfield</p>
                </div>
            </div>

            <div id="suggprofile">
                <div className="suggpp">
                    <img className='suggppr' src="images/sophie.jpg" alt="" />
                </div>
                <div className="suggname">
                    <p>Sophie Stark</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
