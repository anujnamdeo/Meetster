import React from 'react'

export default function Quickstatus() {
  return (
    <>
    <div className="leftsidebarquickstatussection">
        <div className="quickstatusheading">
            <p className='postsheading'>Add a Quick Status</p>
        </div>
        <div>
            <input type="textarea" name="" id="" className='poststextinput' placeholder='Eg. Feeling blessed ;)' />
        </div>
        <div>
            <button className='postbutton' type="submit">Post</button>
        </div>
    </div>
    
    </>
  )
}
