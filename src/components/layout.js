import React from 'react';
import Header from './header';
import Search from './search';

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
