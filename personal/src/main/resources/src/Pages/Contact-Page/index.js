import FormPage from "../form/form";
import Me from "../../Images/me.JPG"
import React from "react";
import style from "./style.module.scss";
import { useHistory } from "react-router-dom";

function Contact() {
    const history = useHistory();

    function addContactInfo(contactData) {
        history.replace('/');
    }

    return (

        <><div className={style.contactForm}>
            <section className={style.contactFormSection}>
                <div className={style.contactFormContain}>
                    <h2 className={style.contactFormContainH2}>Contact The Creator</h2>
                    <FormPage onEnteringComment={addContactInfo} />
                </div>
            </section>
        </div><div className={style.gridcontainer}>
            
                <div className={style.card}>
                    <h2>Joe Buckley</h2>
                    <div className={style.container}>
                        <h1><img classname={style.Img} src={Me} alt="joepic" width={200} height={200}></img>
                        </h1>
                    </div>
                    <h4>Full Stack Developer</h4>
                    <a href="https://github.com/joebuck125"><img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.25&pid=1.7" height={50} width={50}></img></a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/joe-buckley-4358561a2/"><img src="https://th.bing.com/th/id/OIP.mU5yxuiQFNKO4gLh-6SGhwHaD3?w=333&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" height={50}></img></a>
                </div>
                
                {/* <div className={style.contactForm}>
        <section className={style.contactFormSection}>
            <div className={style.contactFormContain}>
                <h2 className={style.contactFormContainH2}>Contact ReKindle</h2>
                <FormPage onEnteringComment={addContactInfo} />
            </div>
        </section> */}
            </div></>
                    



);
}
export default Contact;