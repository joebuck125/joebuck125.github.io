import { Link } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const HomePage =() => {
    return (
        <div className={style.homePage}>
            <section className={style.homeHero}>
                <div className={style.homeContainer}>
                    <h1 className={style.homeHeroH1}>Welcome to Buck's Place</h1>
                    <h2 className={style.homeHeroH2}>An Homage to my dad, and a place for me to needlessly implement neat things</h2>
                </div>
            </section>
            
            <div className={style.homeSpacer}></div>

            <section className={style.homeFeature}>
            <h2 className={style.homeFeatureH2}>As featured on: Lol my LinkedIn and résumé eventually, hopefully</h2>
            </section>

            <section className={style.homeSplit}>
                <div className={style.homeSplitContainer}>
                    <h2 className={style.homeSplitH2}>Airing my grievances and breaking my code since '22</h2>
                    <h3 className={style.homeSplitH3}>Donec egestas, ante non gravida venenatis mauris. I have no idea what this says. </h3>
                    <Link to={"#"} className={style.homeSplitBtn}>Learn More. Eventually.</Link>
                </div>
            </section>

            <section className={style.homeUse}>
                <h2 className={style.homeUseH2}>How To Use Buck's Place</h2>
            <div className={style.homeUseContainer}>
                <article className={style.homeUseCard}>
                    <h3 className={style.homeUseH3}>01.</h3>
                    <h3 className={style.homeUseH3}>It's pretty straightforward at the moment.</h3>
                </article>
                <article className={style.homeUseCard}>
                    <h3 className={style.homeUseH3}>02.</h3>
                    <h3 className={style.homeUseH3}>Eventually the functionality will actually work.</h3>
                </article>
                <article className={style.homeUseCard}>
                    <h3 className={style.homeUseH3}>03.</h3>
                    <h3 className={style.homeUseH3}>For now just be amused at my attempts to make code-art.</h3>
                </article>
            </div>
            </section>

            <section className={style.homeSplit}>
                <div className={style.homeSplitContainer}>
                    <h2 className={style.homeSplitH2}>Lorem Ipsum Dolor Sit. This sounds like dark magic.</h2>
                    <h3 className={style.homeSplitH3}>Donec egestas, ante non gravida venenatis mauris. I think this IS dark magic.</h3>
                    <Link to={"#"} className={style.homeSplitBtn}>Learn More. Maybe sometime?</Link>
                </div>
            </section>
            <div className={style.homeSpacer}></div>
        </div>
    );
}
export default HomePage;