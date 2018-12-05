import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from './Layout'
import DashboardCards from './DashboardCards';
import handleRecebeDadosIniciais from '../actions/shared';

const alignCards = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleRecebeDadosIniciais())
  }
  
  render() {
    return (
      <Layout>
        <div id="area_dados" className="dados">
          <div className="paineis_dashboard" style={alignCards}>
            <DashboardCards />
          </div>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps({ dashboards, loading }) {
  return {
    dashboards,
    loading
  }
}

export default connect(mapStateToProps)(App);
