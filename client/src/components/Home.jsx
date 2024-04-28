import React from "react";
import NavBar from "./NavBar";
import "../css files/home.css"
import { MdAccountCircle } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate();
    

    return(
        <>
            <div className="home-navbar">
                <NavBar />
            </div>
            <div className="main-section">
                <h2 className="home-title">Open Source Payment App</h2>
                <div className="home-trans-section">
                    <button className="transaction-btn" onClick={() => {navigate('/transactions')}}><GrTransaction size={30}/></button>
                    <p>Transcations</p>
                </div>
                <div className="home-send-money-section">
                    <button className="send-money-btn" onClick={() => {navigate('/send_money')}}><IoSend size={30}/></button>
                    <p>Send Money</p>
                </div>
                <div className="home-acc-details-section">
                    <button className="account-btn" onClick={() => {navigate('/account_details')}}><MdAccountCircle size={30} /></button>
                    <p>Account Detail</p>
                </div>

            </div>

        </>
    )
}

export default Home