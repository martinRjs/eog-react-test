import React from 'react';
import Dashboard from './Dashboard'
import '../App.css';

class App extends React.Component {

    onClick = () => {
        this.props.store.dispatch({
            type: 'UPDATE',
            temperature: null,
            latitute: null,
            longitud: null,
            lastUpdated: "Martin"
        })
    }

    componentDidMount() {
        console.log('component mounted . . .');
    };

    render() {
        return (
            <div className="App">
                <header><h1>EOG Data Visualization</h1></header>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>/</li>
                        <li>Map</li>
                    </ul>
                </nav>
                <Dashboard {...this.props}/>
                <button onClick={this.onClick}>click me</button>
            </div>
        );
    }
}

export default App;
