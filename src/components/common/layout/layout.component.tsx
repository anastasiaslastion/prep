import styles from './layout.module.scss';

const Layout = (props: { children: any; }) => (
    <div className={ styles.wrapper }>
        { props.children }
    </div>
);

export default Layout;