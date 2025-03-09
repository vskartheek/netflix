import React, { useEffect, useState } from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
const Featured = ({ type,setGenre }) => {
  const [content,setContent]=useState({});
  useEffect(()=>{
       const getRandomContent= async ()=>{
        try{
          const res=await axios.get(`/movies/random?type=${type}`,{      
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTYzZjA5NDdjYmZkMjkxOWZhMjRhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MTUwMzM2MywiZXhwIjoxNzQyMzY3MzYzfQ.1y32uSxrJFzb9lqJHDudQXicPcJdifWDSX-wjG9huSI"
            }
          });
          setContent(res.data[0]);
        }catch(e){
          console.log(e);
        }
       };
       getRandomContent();
  },[type])
  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
            
              <option>Genre</option>
              <option value="sci-fi">Westren</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="biography">Biography</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="documentary">Documentary</option>
            
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />

      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
         {content.desc}
        </span>
        <div className="buttons">
          <button className="play" >
            <PlayArrow />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
