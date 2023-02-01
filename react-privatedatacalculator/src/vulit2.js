import "./Vulit.css"
import React from "react";
import { useState,useEffect } from "react";




function Private2() {
  const [pic, setpic] = useState([]);

  
  if(!(JSON.parse(localStorage.getItem("file2")))){
    localStorage.setItem("file2" ,JSON.stringify([]) )
  }

  
  let yash= JSON.parse(localStorage.getItem("file2"))
  useEffect(() => {

  

    if((localStorage.getItem("file2")).length>0){
      setpic((prevpics) => prevpics.concat(yash))
    }
  }, [yash]);



  const picHandleChange = (e) => {
    // console.log(e.target.files)

    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      // console.log(fileArray)

      // localStorage.setItem("fileArray" ,fileArray )
      setpic((prevpics) => prevpics.concat(fileArray))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)           //fresh

      )
    }
  }

  const renderlooks = (source) => {
    localStorage.setItem("file2" ,JSON.stringify(source) )
    return source.map((look,index) => {
      return <div key={index}> <img src={look} key={look} alt='pic' /> <br/>
      <button style={{borderRadius:"10px", padding:"3px" ,fontSize:"1rem" ,backgroundColor:"lightcoral" , border:"3px" , cursor:"pointer", marginLeft:"170px" }} onClick={()=>{
        setpic(pic.filter((e)=>e!==look))
      }} >Delete pic</button>
      
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
            <li><a class="dropdown-item" href="/changePass2">ChangePassword</a></li>
            
            <li><a class="dropdown-item" href="/">About</a></li>
          </ul>
        </div>

        <div>
          <input type="file" id="file" multiple onChange={picHandleChange} />

          <div className="label-holder">
            <label htmlFor="file" className="label" >
              select file
            </label>
          </div>

          <div className="result" >
            {renderlooks(pic)}
            

          </div>
          



        </div>



      </div>
    </>
  );
}

export default Private2;
