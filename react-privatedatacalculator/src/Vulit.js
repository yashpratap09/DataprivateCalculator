import "./Vulit.css"
import React from "react";
import { useState,useEffect  } from "react";




function Private1() {
  const [Image, setImage] = useState([]);
 

  if(!(JSON.parse(localStorage.getItem("file1")))){
    localStorage.setItem("file1" ,JSON.stringify([]) )
  }

  let yash= JSON.parse(localStorage.getItem("file1"))
  useEffect(() => {

  

    if((localStorage.getItem("file1")).length>0){
      setImage((prevImages) => prevImages.concat(yash))
    }
  }, []);

  

  const imageHandleChange = (e) => {
    // console.log(e.target.files)

    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file)
      )
      setImage((prevImages) => prevImages.concat(fileArray))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)           //fresh

      )
    }
  }

  

  const renderPhotos = (source) => {

    localStorage.setItem("file1" ,JSON.stringify(source) )

    
    return source.map((photo,index) => {
   

      return <div key={index}> <img src={photo} key={photo} alt='IMAGE' /> <br/>
      <button style={{borderRadius:"10px", padding:"3px" ,fontSize:"1rem" ,backgroundColor:"lightcoral" , border:"3px" , cursor:"pointer", marginLeft:"170px" }} onClick={()=>{
        setImage(Image.filter((e)=>e!==photo))
      }} >Delete image</button>
      
      </div>
      
    })

  }
  //console.log(arr)
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
