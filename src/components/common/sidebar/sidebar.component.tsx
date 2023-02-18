import styles from './sidebar.module.scss';

const Sidebar = (props: { children: any; }) => (
    <aside className={ styles.wrapper }>
        { props.children }
    </aside>
);

export default Sidebar;