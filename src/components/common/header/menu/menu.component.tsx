import { ComponentProps } from 'react';

import styles from './menu.module.scss';

interface IMenu extends ComponentProps<any>{
}

const Menu = ({ children }: IMenu) => {
    return (
        <nav className={ styles.wrapper }>
            { children }

            <span></span>
        </nav>
    )
};

export default Menu;