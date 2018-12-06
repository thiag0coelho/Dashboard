import React from "react";
import Header from "./Header";
import Search from "./Search";
import MenuTabs from "./MenuTabs";

const Layout = ({ children, match }) => (
  <div>
    <Header />
    <div id="app" className="dashboard App">
      <div id="corpo">
        <MenuTabs match={match} />
        <Search />
        <div id="area_dados" className="dados">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
