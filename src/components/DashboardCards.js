import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardCard from './DashboardCard';

class DashboardCards extends Component {
    render() {
        return (
            this.props.dashboardIds.map((id) => (
                <DashboardCard key={id} id={id} />
            ))
        )
    }
}

function mapStateToProps({ dashboards }) {
    return {
        dashboardIds: Object.keys(dashboards)
    }
}

export default connect(mapStateToProps)(DashboardCards)