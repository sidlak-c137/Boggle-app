import React from 'react';
import './Home.css';
import './index';
import Fab from '@material-ui/core/Fab';
import { GAME_ROUTE } from './routes';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            ready: false,
        };
        this.goToGame = this.goToGame.bind(this);
    }
    
    goToGame() {
        this.setState({ ready: true });
    }

    render() {
        if (this.state.ready === true) {
            return (<Redirect to={GAME_ROUTE} />);
        }
        return (
            <div className='appWindow'>
                <div className='appLight'>
                    <head>
                        <title>Sidharth's Boggle</title>
                    </head>
                    <body>
                        <h1>Welcome to Boggle!</h1>
                        <h3> by <br /> Sidharth Lakshmanan </h3>
                        <div className='description'>

                        </div>
                        <div className='navigation' >
                            <Fab variant="extended" color="primary" onClick={this.goToGame}>
                                Play Game!
                            </Fab>
                        </div>
                    </body>
                </div>
            </div >
        );
    }
}

export default Home;
