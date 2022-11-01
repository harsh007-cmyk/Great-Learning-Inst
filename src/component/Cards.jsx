import React,{useState} from 'react'
import './Cardstyles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'
import ReactPlayer from 'react-player/youtube'
function Cards({videos}) {
    console.log("v",videos.data);
    const arr=videos.data; 
    const[video,setVideo]=useState(arr[0].trailer);
  return (
  
    <div className='Cards'>   
      <div className='crd' >
      <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={arr.length} visibleSlides={5} infinite={true}>     
        <Slider className='slider'>
        {arr.map((e,i)=>{
            return(
              <Slide index={i} onClick={()=>{
                console.log("clicked");
                setVideo(e.trailer)
              }}>
            <div className='card'>
                <div className='playList'> 
                <img src={e.poster} alt="Oops..." />
                <div className='Name'>{e.name}</div>
                </div>
            </div>
            </Slide>
            )
        })}
        </Slider>
      <div className='buttons'>
      <ButtonBack className='btn1'><AiFillCaretLeft/></ButtonBack>    
      <ButtonNext className='btn1'><AiFillCaretRight/></ButtonNext>    
      </div>
      </CarouselProvider>   
      </div>    
      <div className='Video'>
      <ReactPlayer url={video} />
      </div>
    </div>
  )
}

export default Cards