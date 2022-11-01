import './Cardstyles.css';
import React from 'react'
import ReactPlayer from 'react-player/youtube'
function Video({currentVideo}) {
    console.log(currentVideo);
  return (
    <div className='Video'>
      <ReactPlayer url={currentVideo} />
      </div>     
  )
}

export default Video;