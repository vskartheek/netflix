import React, { useEffect, useState } from 'react'
import './listitem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Listitem = ({index,item}) => {
  const[isHovered,setIsHovered]=useState(false);
  const[movie,setMovie]=useState({});
  useEffect(()=>{
    const getMovie=async ()=>{
      try{
        const res=await axios.get("/movies/find/"+item,
          {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTYzZjA5NDdjYmZkMjkxOWZhMjRhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MTUwMzM2MywiZXhwIjoxNzQyMzY3MzYzfQ.1y32uSxrJFzb9lqJHDudQXicPcJdifWDSX-wjG9huSI"
            },
          }
        );
        setMovie(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getMovie();
  },[item])
  return (
    <Link to="/watch" state={{movie}}>
    <div className='listItem' 
    style={{left:isHovered && index *225-50 + index*2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
        {movie && movie.img && <img src={movie.img} alt="" />}
       {isHovered && (
        <>
       <video src={movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpAltOutlined className='icon'/>
            <ThumbDownAltOutlined className='icon'/>
          </div>
          <div className="itemInfoTop">
            <span>{movie.duriation}</span>
            <span className="limit">+{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
           {movie.desc}  
          </div>
          <div className="genre">{movie.genre}</div>
        </div>
         </> 
       )}
        </div>
        </Link>
  )
}

export default Listitem;