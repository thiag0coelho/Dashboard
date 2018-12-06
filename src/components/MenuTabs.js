import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Layout from './Layout'
import removeAccents from 'remove-accents';

const formatLink = (tab) => `/${removeAccents(tab.toLowerCase())}/`;

const MenuTabNavbarItem = ({match, tab}) => (
    <NavItem className={match.path === formatLink(tab) ? "ativo" : ""}>
        <Link to={formatLink(tab)}>{tab}</Link>
    </NavItem>
)

const MenuTabNavbar = ({ match }) => (
    <div className="menu_abas">
        <Nav className="abas">
            <MenuTabNavbarItem match={match} tab="Arrecadação"/>
            <MenuTabNavbarItem match={match} tab="Atendimento"/>
            <MenuTabNavbarItem match={match} tab="Faturamento"/>
            <MenuTabNavbarItem match={match} tab="Hidrometria"/>
            <MenuTabNavbarItem match={match} tab="Jurídico"/>
            <MenuTabNavbarItem match={match} tab="Leitura"/>
            <MenuTabNavbarItem match={match} tab="Operacional"/>
            <MenuTabNavbarItem match={match} tab="Serviço"/>
        </Nav>
    </div>
)

const Index = ({ children, match }) => (
    <React.Fragment>
        <MenuTabNavbar match={match}/>
        <Breadcrumb>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            {children}
        </Breadcrumb>
    </React.Fragment>
)

const Arrecadacao = ({ match }) => <Index match={match}><BreadcrumbItem active>Arrecadação</BreadcrumbItem></Index>
const Atendimento = ({ match }) => <Index match={match}><BreadcrumbItem active>Atendimento</BreadcrumbItem></Index>
const Faturamento = ({ match }) => <Index match={match}><BreadcrumbItem active>Faturamento</BreadcrumbItem></Index>
const Hidrometria = ({ match }) => <Index match={match}><BreadcrumbItem active>Hidrometria</BreadcrumbItem></Index>
const Juridico = ({ match }) => <Index match={match}><BreadcrumbItem active>Juridico</BreadcrumbItem></Index>
const Leitura = ({ match }) => <Index match={match}><BreadcrumbItem active>Leitura</BreadcrumbItem></Index>
const Operacional = ({ match }) => <Index match={match}><BreadcrumbItem active>Operacional</BreadcrumbItem></Index>
const Servico = ({ match }) => <Index match={match}><BreadcrumbItem active>Serviço</BreadcrumbItem></Index>

const MenuTabs = ({match}) => (
<div>
</div>
);

export default MenuTabs;