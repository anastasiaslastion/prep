import React from 'react';
import { Outlet } from 'react-router-dom';

import Layout from './components/common/layout/layout.component';
import Header from './components/common/header/header.component';
import Sidebar from "./components/common/sidebar/sidebar.component";

function App() {
    return (
        <Layout>
            <Sidebar />
            <Outlet />
        </Layout>
    );
}

export default App;
