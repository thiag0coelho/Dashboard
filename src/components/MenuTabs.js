import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Breadcrumb, BreadcrumbItem } from "reactstrap";
import removeAccents from "remove-accents";
import { connect } from "react-redux";

const formatLink = tab => `/${removeAccents(tab.toLowerCase())}/`;

const MenuTabNavbarItem = ({ match, tab }) => (
  <NavItem className={match.path === formatLink(tab) ? "ativo" : ""}>
    <Link to={formatLink(tab)}>{tab}</Link>
  </NavItem>
);

const MenuTabNavbar = ({ match, dashboards }) => (
  <div className="menu_abas">
    <Nav className="abas">
      {Object.keys(dashboards).map(dashboard => (
        <MenuTabNavbarItem match={match} tab={dashboard} key={dashboard} />
      ))}
    </Nav>
  </div>
);

const DashboardBreadscrumb = ({ children, match }) => (
  <React.Fragment>
    <MenuTabNavbar match={match} />
    <Breadcrumb>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      {children}
    </Breadcrumb>
  </React.Fragment>
);

const GenericBreadscrumb = ({ match }) => (
  <DashboardBreadscrumb match={match}>
    <BreadcrumbItem active>Serviço</BreadcrumbItem>
  </DashboardBreadscrumb>
);

const MenuTabs = ({ match, dashboards, loading }) => (
  <React.Fragment>
    <MenuTabNavbar match={match} dashboards={dashboards} />
    {/* <GenericBreadscrumb match={match}></GenericBreadscrumb> */}
  </React.Fragment>
);

function mapStateToProps({ dashboards, loading }) {
  return {
    dashboards,
    loading
  };
}

export default connect(mapStateToProps)(MenuTabs);
