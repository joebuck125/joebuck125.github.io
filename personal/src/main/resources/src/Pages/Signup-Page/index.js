import React, { useState } from "react";

import axios from 'axios';
import { setUsernameSession } from "../../utils/common";
import style from "./style.module.scss";

const Signup = (props) => {

    const handleLogin = () => {

        const userData = {
            username: username,
            password: password
        };

        axios.post('/api/user/add-user', userData).then((response) => {
            setUsernameSession(username);
            props.history.push('/');
        });

        window.location.href='/';
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <div className={style.signPage}>
        <section className={style.signupOne}>
            <h1 className={style.signupH1}>Blog alongside a legend.</h1>
        </section>

        <section className={style.signupTwo}>
        <h2 className={style.signupH2}>Sign Up</h2>
            <form className={style.signupForm} onSubmit={handleSubmit}>
                <input className={style.signupText} 
                type="text" placeholder="Username" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)}
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Username"}>
                </input>
                <input className={style.signupText} 
                type="text" 
                placeholder="Password" value={password} 
                onChange={(event) => setPassword(event.target.value)}
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Password"}>
                </input>
                <button className={style.signupSubmit} type="submit" onClick={handleLogin}>Sign Up</button>
            </form>
        </section>
        </div>
    );
}

export default Signup;