import {Route, Switch} from 'react-router-dom';

import ContactPage from '../../pages/Contact-page';
import HomePage from '../../pages/Home-page';
import JournalPage from '../../pages/Journal-page';
import LoginPage from '../../pages/Login';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/Home'} component={HomePage} />
            <Route exact path={'/Journal-Page'} component={JournalPage} />
            <Route exact path={'/Contact-Page'} component={ContactPage} />
            <Route exact path={'/'} component={LoginPage} />
        </Switch>

    );
    
}

export default AppRouter;