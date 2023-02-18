import React from 'react';

import Sidebar from '../../common/sidebar/sidebar.component';
import Content from '../../common/content/content.component';
import Main from '../../common/main/main.component';

const StatisticsModule = () => {
    return (
        <Main>
            <Sidebar>
                Sidebar
            </Sidebar>
            <Content>
                Statistics
            </Content>
        </Main>
    )
}

export default StatisticsModule;