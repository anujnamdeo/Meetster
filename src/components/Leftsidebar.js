import React from 'react'
import Createpost from './Createpost'
import Quickstatus from './Quickstatus'

export default function Leftsidebar() {
    return (

        <>
            <div>
                <div className="leftsidebarprofilesection">
                    <div id='lsbppcont' >
                        <img src="images/b.jpg" alt="" id="lsbprofilephoto" />
                    </div>
                    <div className="lsbpdetails">
                        <p id="lsbname">Elizabeth Lail</p>
                        <p id="lsbabout">carpe diem✨ | 21 | Athens University | Hey...</p>
                    </div>
                </div>

                <div>
                    <Quickstatus />
                </div>

                <div>
                    <Createpost />
                </div>


            </div>
        </>
    )
}
