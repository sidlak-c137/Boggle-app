import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { GameSolo } from './GameSolo';
import {
    HOME_ROUTE,
    GAME_ROUTE,
    DEFAULT
} from './routes'

class App extends React.Component {
    componentDidMount() {
        this.detectBrowser();
    }

    /// <summary>
    /// This Method is used in order to detect how old you browser is, or if it is unsupported.
    /// If either it will alert the user that their browser might not work with our website and that they should update.
    /// </summary>
    detectBrowser() {
        const { detect } = require('detect-browser');
        const browser = detect();
        const bVersion = Number(browser.version.substring(0, browser.version.indexOf('.')));
        if ((browser.name === 'chrome' && bVersion < 54)
            || (browser.name === 'firefox' && bVersion < 59)
            || (browser.name === 'safari' && bVersion < 10)
            || (browser.name === 'opera' && bVersion < 44)
        ) {
            alert("Your Browser is too old. Please Update to the latest version, things may not function properly!");
        } else if (browser.name === 'Microsoft Internet Explorer' || browser.name === 'MSIE' || browser.name === 'microsoft internet explorer' || browser.name === 'msie') {
            alert("Your Browser is unsupported. Things may not function properly!");
        }
    }


    render() {
        return (
            <div className='App'>
                <div className='main' id='main'>
                    <Switch>
                        <Route exact path={HOME_ROUTE} component={Home} />
                        <Route exact path={GAME_ROUTE} component={GameSolo} />
                        <Route exact path={DEFAULT} component={Home} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;