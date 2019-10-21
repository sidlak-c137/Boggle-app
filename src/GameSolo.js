import React from 'react';
import './GameSolo.css';
import './index';
import Fab from '@material-ui/core/Fab';

class GameSolo extends React.Component {
    render() {
        return (
            <div className='appWindow'>
                <div className='appLight'>
                    <head>
                        <title>Sidharth's Boggle</title>
                    </head>
                    <body>
                        <h1>Play Boggle!</h1>
                        <h3> by <br /> Sidharth Lakshmanan </h3>
                        <div className='description'>

                        </div>
                        <div className='navigation' >
                            <Fab variant="extended" color="primary">
                                Play Game!
                            </Fab>
                        </div>
                    </body>
                </div>
            </div >
        );
    }
}

export default GameSolo;

