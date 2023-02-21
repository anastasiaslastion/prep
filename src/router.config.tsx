import React from "react";
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';
import DashboardModule from './components/modules/dashboard/dashboard.component';
import LearnModule from './components/modules/learn/learn.component';
import StatisticsModule from './components/modules/statistics/statistics.component';
import DocsModule from './components/modules/docs/docs.component';
import ExploreModule from './components/modules/explore/explore.component';

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            path: '/',
            element: <Navigate to='dashboard' replace />
    },{
        path: 'dashboard',
        element: <DashboardModule />
    }, {
        path: 'learn',
        element: <LearnModule />
    }, {
        path: 'statistics',
        element: <StatisticsModule />
    }, {
            path: 'explore',
            element: <ExploreModule />
    }, {
            path: 'docs',
            element: <DocsModule />
    }]
}
]);

export default routerConfig;