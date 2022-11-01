import React, { useEffect, useState } from 'react'
import Cards from '../component/Cards';
import Navbar from '../component/Navbar';


function HomeScreen() {
  const [videos, setvideos] = useState({});  
  useEffect(()=>{
  const url="https://songsapi-48e45-default-rtdb.asia-southeast1.firebasedatabase.app/api.json";
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

