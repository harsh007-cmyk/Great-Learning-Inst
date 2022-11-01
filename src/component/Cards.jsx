import React,{useState} from 'react'
import './Cardstyles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'
import Video from './Video';
function Cards({videos}) {
    console.log("v",videos.data);
    const arr=videos.data; 
    const[video,setVideo]=useState(arr[0].Song);
    const [name,setName]=useState(arr[0].name);
  return (
  
    <div className='Cards'>   
      <div className='crd' >
      <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={arr.length} visibleSlides={4} infinite={true}>     
        <Slider className='slider'>
        {arr.map((e,i)=>{
            return(
              <Slide index={i} onClick={()=>{
                console.log("clicked");
                setName(e.name)
                setVideo(e.Song)
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
      <div className='playerAndName'>
      <Video currentVideo={video}/>  
      <div className='name'>{name.toUpperCase()}</div>
      </div>    
 
    </div>
  )
}

export default Cards