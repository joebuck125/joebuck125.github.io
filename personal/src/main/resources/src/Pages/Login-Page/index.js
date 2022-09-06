import React, { useEffect, useState } from "react";
import { getUsername, setUsernameSession } from "../../utils/common";

import Axios from 'axios';
import style from "./style.module.scss";

const Login = (props) => {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [usernameSession, setUsernameSession] = useState(true);
    //const [loadingUsernameSession, setLoadingUsernameSession] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const fetchData = async () => {
            const result = await Axios(`/api/user/${userName}`);
            console.log(result.data);
            setUsernameSession(result.data.username);
             props.history.push('/');
        }

        fetchData();

    }

    console.log("GET USER NAME", getUsername());


    return (
        <div className={style.loginPage}>

            <section className={style.loginTwo}>
                <h2 className={style.loginH2}>Login To Your Account</h2>
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <input className={style.loginText}
                        type="text" placeholder="Username"
                        value={userName}
                        onChange={(event) => setUsername(event.target.value)}
                        onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "Username"}>
                    </input>
                    <input className={style.loginText}
                        type="text"
                        placeholder="Password" value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "Password"}>
                    </input>
                    <button className={style.loginSubmit} onClick={() => (window.location.href='/')} type="submit">Login With Username</button>
                </form>
            </section>

            <section className={style.loginOne}>
                <h1 className={style.loginH1}>Welcome Back {getUsername()} We're Glad You're Here.</h1>
            </section>
        </div>
    );
}

export default Login;