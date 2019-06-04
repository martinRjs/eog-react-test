import React from 'react';


class Dashboard extends React.Component {
    render () {
        return (
            <div className="dashboard">
                <div className="dashboard-title">
                    <h2>EOG Dashboard Visualization</h2>
                </div>
                <div className="dashboard-content">
                    <span>Temperature:</span> 296.70171815178423<br/>
                    <span>Latitude:</span>34.17278358219306<br/>
                    <span>Longitude:</span> -92.93805783771036<br/>
                    <span>Last Received:</span>{this.props.lastReceived}<br/>
                </div>
            </div>
        );
    }
}

export default Dashboard;