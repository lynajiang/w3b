import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
    return (
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=Q4JOpHmzHjs' controls={true}/>
            <ReactPlayer url='https://youtu.be/pYDeTgSSkWs?si=2OmRdWT3nJw0_bUO' controls={true} />
        </div>
        
    )
}

export default Video
