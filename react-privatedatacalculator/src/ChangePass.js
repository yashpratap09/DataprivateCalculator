
import "./Vulit.css"
import { useState, useEffect } from "react"



const ChangePass = () => {
    let [NewPassword, setNewPassword] = useState("")

    useEffect(() => {
    }, [NewPassword]);

    const handleOnchange = (event) => {
        setNewPassword(event.target.value)

    }

    function Yash() {
        console.log(NewPassword)
        localStorage.setItem("password1", NewPassword)
        if(NewPassword===""){
            alert("Enter a valid password")
        }else{
            alert("Password successfully updated")
            window.location.href = "/private1"
        }

    }





    return (
        <>

            <div className="app" >
                <div style={{marginTop:"130xpx"}} className="label-holder"> <label className="lable2" >Password Change</label>

                    <input style={{ marginTop: "20px", borderRadius: "15px", width: "250px", height: "40px", border: "15px green" ,padding:"10px" }} type="text" placeholder="Enter new password" value={NewPassword}
                        onChange={handleOnchange}

                    />

                    <button style={{ marginTop: "20px", backgroundColor: "white", height: "35px", width: "150px", borderRadius: "20px", "font-size": "1rem" }} type="submit" onClick={Yash} >Save Password</button>

                </div>

            </div>


        </>
    )
}

export default ChangePass