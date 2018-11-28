import React from 'react';
import Header from './Header';
import Search from './Search';

export default ({ children }) => (
    <div>
        <Header />
        <div id="app" className="dashboard App">
            <div id="corpo">
                <Search />
                {children}
            </div>
        </div>
    </div>
);
