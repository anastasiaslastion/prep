import styles from './main.module.scss';

const Main = (props: { children: any; }) => (
    <div className={ styles.wrapper }> { props.children }</div>
)

export default Main;