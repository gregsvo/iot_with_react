import React, { Component } from 'react';
import './App.css';
import CardList from './components/dashboard/card_list';
import { Grid } from 'react-bootstrap';
import UpdateButton from './components/dashboard/update_button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>IoT using MQTT, Flask, React, and SocketIo!</h2>
                    <Grid>
                        <CardList />
                    </Grid>
                    <UpdateButton />
                </div>
            </div>
        );
    }
}

export default App;
