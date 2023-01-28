import "./Vulit.css"
import React from "react";
import { useState,  } from "react";




function Private1() {
  const [Image, setImage] = useState([]);










  const imageHandleChange = (e) => {
    // console.log(e.target.files)

    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      // console.log(fileArray)

      // localStorage.setItem("fileArray" ,fileArray )





      setImage((prevImages) => prevImages.concat(fileArray))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)           //fresh

      )
    }
  }

  const renderPhotos = (source) => {
    return source.map((photo,index) => {
      return <div key={index}> <img src={photo} key={photo} alt='IMAGE' /> <br/>
      <button style={{borderRadius:"10px", padding:"3px" ,fontSize:"1rem" ,backgroundColor:"lightcoral" , border:"3px" , cursor:"pointer", marginLeft:"170px" }} onClick={()=>{
        setImage(Image.filter((e)=>e!==photo))
      }} >Delete image</button>
      
      </div>
       
      
      
      
    })
  }
  return (
    <>
      <div className="app">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Option
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/changePass">ChangePassword</a></li>
            
            <li><a class="dropdown-item" href="#">About</a></li>
          </ul>
        </div>

        <div>
          <input type="file" id="file" multiple onChange={imageHandleChange} />

          <div className="label-holder">
            <label htmlFor="file" className="label" >
              select file
            </label>
          </div>

          <div className="result" >
            {renderPhotos(Image)}
            

          </div>
          



        </div>



      </div>
    </>
  );
}

export default Private1;
