import React from "react";
import NavBar from "./NavBar";
import "../css files/user_signup.css";
import { useState } from "react";
import { MdPassword } from "react-icons/md";
const User_Signup = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conform_pass, setConformPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name,email , password: pass })
            });
            const data = await response.json();
            console.log("User Created Sucessfully...", data);

        } catch (error) {
            console.error("Error Creating User:", error);
        }
    };

    return(
        <>
            <div className="user-signup-navbar">
                <NavBar />
            </div>
            <div className="user-signup-outer-div">
                
                <h2 className="user-signup-title">User Signup</h2>

                <label htmlFor="user-name">Name:</label>
                <input type="text" id="user-name" value={name} onChange={(e) => {setName(e.target.value)}}/>

                <label htmlFor="user-email">Email:</label>
                <input type="text" id="user-email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                <label htmlFor="user-pass">Password:</label>
                <input type="password" id="user-pass" value={pass} onChange={(e) => {setPass(e.target.value)}}/>

                <label htmlFor="user-conform-pass">Conform Password:</label>
                <input type="password" id="user-conform-pass" value={conform_pass} onChange={(e) => {setConformPass(e.target.value)}}/>

                <button className="user-signup-btn" onClick={handleSubmit}>Create User</button>
            </div>
        </>
    )

}

export default User_Signup