import React from 'react';

import styles from './header.module.scss';

import Button from '../../core/button/button.component';
import Icon from '../../core/icon/icon.component';
import InputText from '../../core/input-text/input-text.component';

const Header = () => (
    <header className={ styles.wrapper }>
        <div className={ styles.search }>
            <InputText />
        </div>

        <div className={ styles.notification }>
            <Button type='withIcon'>
                <Icon name='notification' viewbox='0 96 960 960'/>
            </Button>
        </div>

        <div className={ styles.user }>
            <Button type='withIcon'>
                <Icon name='account' />
            </Button>
        </div>
    </header>
);

export default Header;