import {Route, Switch} from "react-router-dom";

import Contact from "../../Pages/Contact-Page";
import HomePage from "../../Pages/Home-Page";
import JournalPage from "../../Pages/Journal-Page"
import LoginPage from "../../Pages/Login-Page"
import SignUpPage from "../../Pages/Signup-Page"
import SingleJournalEntryPage from "../singleJournalEntry";

const AppRouter = () => {
    
    return (
        <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/Contact'} component={Contact}/>
            <Route exact path={'/Journal-Page'} component={JournalPage} />
            <Route exact path={'/Login'} component={LoginPage} />
            <Route exact path={'/Signup'} component={SignUpPage} />
            <Route exact path={'/Journal-Page/:id'} component={SingleJournalEntryPage} />
        </Switch>
    );
}

export default AppRouter;