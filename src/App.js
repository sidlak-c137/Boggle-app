import React from 'react';
import './App.css';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/NavigateNext';

export default function App() {
    return (
        <div className='appWindow'>
            <div className='appLight'>
                <head>
                    <title>Sidharth's Boggle</title>
                </head>
                <body>
                    <h1>Welcome to Boggle!</h1>
                    <h3> by <br /> Sidharth Lakshmanan </h3>
                    <div className= 'description'>

                    </div>
                    <div className='navigation' >
                        <Fab variant="extended" color="primary">
                            Play Game!
                        </Fab>
                    </div>
                </body>
            </div>
        </div>
    );
}
