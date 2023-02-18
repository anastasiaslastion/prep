import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import Layout from './components/common/layout/layout.component';
import Header from './components/common/header/header.component';

const HEADER_NAVIGATION_MOCK = [{
    id: '1',
    path: 'dashboard',
    title: 'Dashboard'
}, {
    id: '2',
    path: 'learn',
    title: 'Learn'
}, {
    id: '3',
    path: 'statistics',
    title: 'Statistics'
}];

function App() {
  return (
      <Layout>
          <Header>
              {
                  HEADER_NAVIGATION_MOCK.map(({ path, title, id}) =>
                      <NavLink
                          key={ id }
                          to = { path }>
                          { title }
                      </NavLink>)
              }
          </Header>

          <Outlet />
      </Layout>
  );
}

export default App;
