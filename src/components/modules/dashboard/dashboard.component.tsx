import React from 'react';

import Sidebar from '../../common/sidebar/sidebar.component';
import Content from '../../common/content/content.component';
import Main from '../../common/main/main.component';

const DashboardModule = () => {
    return (
        <Main>
            <Sidebar>
                Sidebar
            </Sidebar>
            <Content>
                Dashboard
            </Content>
        </Main>
    )
}

export default DashboardModule;

