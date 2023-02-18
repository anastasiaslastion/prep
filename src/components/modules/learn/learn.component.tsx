import React from 'react';

import Sidebar from '../../common/sidebar/sidebar.component';
import Content from '../../common/content/content.component';
import Main from '../../common/main/main.component';

const LearnModule = () => {
    return (
        <Main>
            <Sidebar>
                Sidebar
            </Sidebar>
            <Content>
                Learn
            </Content>
        </Main>
    )
}

export default LearnModule;