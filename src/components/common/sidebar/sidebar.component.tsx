import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.scss';

import Button from '../../core/button/button.component';
import Icon from '../../core/icon/icon.component';

import NAVIGATION_MOCK from '../../../mocks/navigation.mock';

const Sidebar = () => {
    const menu = NAVIGATION_MOCK;

    const getMenu = () => menu.map(({ path, title, id, icon, viewbox = undefined,}) =>
        <NavLink
            className={ styles.menuItem }
            key={ id }
            to = { path }
        >
            <Button type='withIcon'>
                { viewbox ? <Icon name={ icon } viewbox={ viewbox } /> : <Icon name={ icon } />}
            </Button>

            { title }
        </NavLink>
    );

    return (
        <div className={styles.wrapper}>
            <div className={ styles.logo }>
                <Icon name='lightbulb' viewbox='0 96 960 960' />
            </div>

            <nav className={ styles.menu }>
                { getMenu() }
            </nav>

            <div className={ styles.bottomMenu }>
                <Button type='withIcon'>
                    <Icon name='settings' />
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;