import Icon from '../../core/icon/icon.component';
import Button from '../../core/button/button.component';

import styles from './header.module.scss';

import Menu from './menu/menu.component';

const Header = (props: { children: any; }) => (
    <header className={ styles.wrapper }>
        <div className={ styles.logo }>
            App Name

            <Button type = 'withIcon'>
                <Icon name = 'arrowLeft' size='small'/>
            </Button>
        </div>

        <div className={ styles.search }></div>

        <Menu className={ styles.menu }>
            { props.children }
        </Menu>

        <div className={ styles.user }>
            <Button type = 'withIcon'>
                <Icon name = 'account' />
            </Button>
        </div>
    </header>
);

export default Header;