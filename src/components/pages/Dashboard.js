import React from "react";
import DashboardCards from '../DashboardCards';
import Layout from '../Layout'

const alignCards = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}

const Dashboard = () => (
  <Layout>
    <div className="paineis_dashboard" style={alignCards}>
      <DashboardCards />
    </div>
  </Layout>
);

export default Dashboard;