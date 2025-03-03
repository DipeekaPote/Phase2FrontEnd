import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Components/ContextProvider/Context";

const ClientDash = () => {

    // Setting up environment variables
    const API_KEY = process.env.REACT_APP_API_IP;

    const history = useNavigate();
    const { logindata, setLoginData } = useContext(LoginContext);
    //  console.log(logindata.ValidUserOne.email);

    const [data, setData] = useState(false);
    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");
        // Cookies.set("userToken", res.result.token); // Set cookie with duration provided
        // console.log(token);

        const url = `${API_KEY}/common/login/verifytoken/`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });

        const data = await res.json();
        if (data.status === 400 || !data) {
            // console.log("error page");
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data);
            history("/clientdash");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true);
        }, 2000);
    }, []);

    console.log(logindata);
    return (
        <>
            {/* {logindata && (
                <div>
                    <p>Message: {logindata.message}</p>
                    <p>User ID: {logindata.user.id}</p>
                    <p>Role: {logindata.user.role}</p>
                  
                </div>
            )} */}
            
        </>
    );
};

export default ClientDash;
