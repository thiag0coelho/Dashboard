import React from 'react';
import DashboardCardIndicator from './DashboardCardIndicator'
import { connect } from 'react-redux';
import removeAccents from 'remove-accents';

const DashboardCard = ({ dashboardCard, id }) => {
    const nameLowerCase = removeAccents(id.toLowerCase());
    return (
        <div className={`painel_dashboard largura25 ${nameLowerCase} ${dashboardCard.classe}`}>
            <div>
                <h2>{id}</h2>
                <a href={`${nameLowerCase}/`} alt={`${id}`}>
                </a>
                <DashboardCardIndicator dashboardCard={dashboardCard} />
            </div>
        </div>
    )
};

function mapStateToProps({ dashboards }, { id }) {
    return {
        dashboardCard: dashboards[id],
        id
    }
}

export default connect(mapStateToProps)(DashboardCard)
