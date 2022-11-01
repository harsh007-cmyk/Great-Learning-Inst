import React, { useEffect, useState } from 'react'
import Cards from '../component/Cards';
import Navbar from '../component/Navbar';
const cors=require('cors');

function HomeScreen() {
  const [videos, setvideos] = useState({});  
  useEffect(()=>{
  const url="https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList";
  const fun= async()=>{
  let data=await fetch(url);
  let Json=await data.json();
  console.log("hson",Json);   
  setvideos(Json);
  console.log(Json);

 };
 fun();
},[])
  console.log("video",videos);
   return (
    <div>  
      <Navbar/>
      {videos.status&&  
         <Cards videos={videos}/>}
    </div> 
  )
}

export default HomeScreen

