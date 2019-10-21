import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import GameSolo from './GameSolo';
import {
    HOME_ROUTE,
    GAME_ROUTE,
    DEFAULT
} from './routes'

class App extends React.Component {  
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