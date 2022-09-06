import React, { useEffect, useState } from "react";

import Axios from 'axios';
import Journals from "../../Components/journal-component";
import { getUsername } from "../../utils/common";
import style from "./style.module.scss";

const JournalPage = () => {

    const userName = getUsername();

    const [journals, setJournals] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`/api/${userName}/journals`);
            setJournals(result.data);
        }

        !journals && fetchData();

    }, [userName, journals]);


    return (
        <div>
            <div className={style.journalPage}>
                <section>
                    <Journals journals={journals} setJournals={setJournals} userName={userName} />
                    
                    <div className={style.journalLinks}>
                        {/* <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
                        <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
                        <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
                        <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
                        <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
                        <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
                        <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
                        <Link className={style.journalBtn} to={"#"}>Placeholder</Link> */}
                        <div className={style.journalSpacer}></div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default JournalPage;