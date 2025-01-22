import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router"
const Movieddetails = () => {
    const {id}=useParams()
    const FetchData=()=>{
        axios.get(`${import.meta.env.VITE_URL}movie/${id}`,{
            headers:{
                "Content-Type":"application/json",
                token:`Bearer ${localStorage.getItem('Token')}`
            }
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        FetchData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Movieddetails
