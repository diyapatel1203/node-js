import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialdata={
  title:"",
  author:"",
  content:"", 
  tags:[],
  publishedDate:0
}

const BlogForm = () => {

  const [formdata,setformdata]=useState(initialdata)

  const {title, author, content, tags,publishedDate}=formdata
  const navigate=useNavigate()

  
const handlechange=(e)=>{
  setformdata({...formdata,[e.target.name]:e.target.value})
}


  const handlesubmit=async(e)=>{

    e.preventDefault()
    try {
      await axios.post("http://localhost:2020/blog",formdata)
      alert("Data Added...")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
    
}

  return (
    <div style={{marginLeft:"33%"}}>
      <h1 style={{marginLeft:"10%",fontFamily:"sans-serif"}}>Add Book Here</h1>
      <div>
      <form action="" style={{borderRadius:"10px",width:"40%",padding:"20px",boxShadow:"10px 10px 20px grey"}} onSubmit={(e)=>handlesubmit(e)}>
        
      <input style={{width:"94%",padding:"10px"}} name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder='Title' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='author' value={author} onChange={(e)=>handlechange(e)} type="text" placeholder='Author' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='content' value={content} onChange={(e)=>handlechange(e)} type="text" placeholder='Content' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='tags' value={tags} onChange={(e)=>handlechange(e)} type="text" placeholder='Tags' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='publishedDate' value={publishedDate} onChange={(e)=>handlechange(e)} type="Date" placeholder='Published-Date' /><br /><br></br>
        <button type='submit' style={{marginLeft:"0%",border:"none",backgroundColor:"black",color:"white",padding:"10px 180px 10px 200px"}}>ADD</button>
      </form>
      </div>
    </div>
  )
}

export default BlogForm
