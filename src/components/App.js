import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import handleRecebeDadosIniciais from '../actions/shared';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Atendimento from './pages/Atendimento'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleRecebeDadosIniciais())
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/atendimento/" component={Atendimento}/>
        </div>
        {/* <Route path="/arrecadacao/" component={Arrecadacao} />
            <Route path="/atendimento/" component={Atendimento} />
            <Route path="/faturamento/" component={Faturamento} />
            <Route path="/hidrometria/" component={Hidrometria} />
            <Route path="/juridico/" component={Juridico} />
            <Route path="/leitura/" component={Leitura} />
            <Route path="/operacional/" component={Operacional} />
            <Route path="/servico/" component={Servico} /> */}
      </Router>
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
