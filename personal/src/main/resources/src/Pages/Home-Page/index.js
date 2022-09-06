import { Link } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const HomePage =() => {
    return (
        <div className={style.homePage}>
            <section className={style.homeHero}>
                <div className={style.homeContainer}>
                    <h1 className={style.homeHeroH1}>Rekindle The Love Flame</h1>
                    <h2 className={style.homeHeroH2}>Build A Deeper Connection With Your Significant Other</h2>
                </div>
            </section>

            <section className={style.homeFeature}>
            <h2 className={style.homeFeatureH2}>As Featured In: </h2>
            </section>

            <section className={style.homeSplit}>
                <div className={style.homeSplitContainer}>
                    <h2 className={style.homeSplitH2}>Fostering Better Relationships</h2>
                    <h3 className={style.homeSplitH3}>Donec egestas, ante non gravida venenatis mauris.</h3>
                    <Link to={"#"} className={style.homeSplitBtn}>Learn More</Link>
                </div>
            </section>

            <section className={style.homeUse}>
                <h2 className={style.homeUseH2}>How To Use Rekindle</h2>
            <div className={style.homeUseContainer}>
                <article className={style.homeUseCard}>
                    <h3 className={style.homeUseH3}>01.</h3>
                    <h3 className={style.homeUseH3}>Donec egestas, ante non gravida venenatis mauris.</h3>
                </article>
                <article className={style.homeUseCard}>
                    <h3 className={style.homeUseH3}>02.</h3>
                    <h3 className={style.homeUseH3}>Donec egestas, ante non gravida venenatis mauris.</h3>
                </article>
                <article className={style.homeUseCard}>
                    <h3 className={style.homeUseH3}>03.</h3>
                    <h3 className={style.homeUseH3}>Donec egestas, ante non gravida venenatis mauris.</h3>
                </article>
            </div>
            </section>

            <section className={style.homeSplit}>
                <div className={style.homeSplitContainer}>
                    <h2 className={style.homeSplitH2}>Lorem Ipsum Dolor Sit</h2>
                    <h3 className={style.homeSplitH3}>Donec egestas, ante non gravida venenatis mauris.</h3>
                    <Link to={"#"} className={style.homeSplitBtn}>Learn More</Link>
                </div>
            </section>
            <div className={style.homeSpacer}></div>
        </div>
    );
}
export default HomePage;