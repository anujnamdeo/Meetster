import React from 'react'

export default function Createpost() {
    return (
        <>

            <div className="leftsidebarcreatepostsection" >
                <div className="createpostheading">
                    <p className='postsheading' >Add a Post</p>
                </div>
                <div>
                    <input type="text" name="" id="" className='poststextinput' placeholder='Write Something...' />
                </div>
                <div>
                    <input type="file" name="" id="" placeholder='Photo' />
                </div>
                <div>
                    <button className='postbutton' type="submit">Post</button>
                </div>
            </div>

        </>
    )
}
