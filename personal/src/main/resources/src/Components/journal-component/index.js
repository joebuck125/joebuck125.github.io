import { React, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.scss';

const Journals = ({ userName, journals, setJournals }) => {


    const [journalState, setJournalState] = useState({
        journalDate: "",
        journalEntry: "",
        userName: userName
    });

    const handleJournalDateChange = (e) => {
        const value = e.target.value;
        setJournalState({
            ...journalState,
            [e.target.name]: value
        });
    };

    const handleJournalEntryChange = (e) => {
        const value = e.target.value;
        setJournalState({
            ...journalState,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            journalDate: journalState.journalDate,
            journalEntry: journalState.journalEntry,
            userName: journalState.userName
        };

        axios.post(`/api/${userName}/journals/add-journal-entry`, userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setJournals(response.data);
        });
    };

    const handleDelete = (userName, journalId) => {
        axios.delete(`/api/${userName}/journals/${journalId}/delete-journal-entry`).then((response) => {
            console.log('Delete Successful');
            console.log('DATA', response.data);
            setJournals(response.data);
        });
    };

    

    return (

        <div className={style.journalPage}>
            <section className={style.journalSection}>
                <h1 className={style.journalH1}>blog.</h1>
            </section>

            <form className={style.journalForm} onSubmit={handleSubmit}>
                <input className={style.journalDate}
                    type="date"
                    name="journalDate"
                    value={journalState.journalDate}
                    onChange={handleJournalDateChange}
                />
                <textarea className={style.journalEntry}
                    type="text"
                    name="journalEntry"
                    value={journalState.journalEntry}
                    onChange={handleJournalEntryChange}
                    //placeholder='Your Thoughts'
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={(e) => e.target.placeholder = "What's on your mind?"}
                />
                <button className={style.journalSubmit} type="submit">Submit</button>
            </form>
            <h3 className={style.journalH2}>View or Edit Previous Entries:</h3>
            <section className={style.journalSection}>
                {journals && journals.map(journal => (
                    <div className={style.journalLinks} key={journal.id}>
                        <p className={style.previousJournalDate}>{journal.journalDate}<button onClick={() => handleDelete(userName, journal.id)}>x</button></p>
                        <div className={style.journalBtn}
                        >{journal.journalEntry}</div>
                        <Link className={style.journalBtn} to={`/Journal-Page/${journal.id}`}>Edit/Update entry</Link>
                        <div className={style.journalSpacer}></div>
                    </div>
                ))}
            </section>
        </div>

    );

}

export default Journals;