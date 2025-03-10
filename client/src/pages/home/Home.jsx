import React, { useEffect, useState } from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import axios from 'axios'
const Home = ({type}) => {
  const [lists,setLists]=useState([]);
  const [genre,setGenre]=useState(null);
  useEffect(()=>{
    const getRandomLists= async()=>{
      try{
        const res=await axios.get(`lists${type ? "?type="+type:""}  ${genre ? "genre="+genre:""}`,{
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTYzZjA5NDdjYmZkMjkxOWZhMjRhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MTUwMzM2MywiZXhwIjoxNzQyMzY3MzYzfQ.1y32uSxrJFzb9lqJHDudQXicPcJdifWDSX-wjG9huSI"
          }
        });

      setLists(res.data)
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  },[type,genre]);
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type} setGenre={setGenre}/>
        {lists.map((list)=>(
          <List key={list._id} list={list}/>
        ))}
        
    </div>
  )
}

export default Home