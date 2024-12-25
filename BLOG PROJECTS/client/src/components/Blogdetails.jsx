import React from "react";

const Blogdetails = ({ title, author, content, tags, publishedDate }) => {
  return (
    <div>
      <div>
        <h3 style={{ fontFamily: "sans-serif" }}>{title}</h3>
        <hr />
        <div style={{display:"flex",alignItems:"center"}}>
          <b style={{ fontFamily: "sans-serif",width:"22%" }}>Author:</b>
          <p>{author}</p>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          <b style={{ fontFamily: "sans-serif",width:"26%",marginBottom:"35px" }}>Content:</b> 
          <p style={{width:"83%",textAlign:"left"}}>{content}</p>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          <b style={{ fontFamily: "sans-serif",width:"19%" }}>Tags:</b> 
          <p >{tags}</p>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          <b style={{ fontFamily: "sans-serif",width:"40%" }}>Published-Date:</b>{" "}
          <p>{publishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
