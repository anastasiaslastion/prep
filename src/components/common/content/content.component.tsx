import styles from './content.module.scss';

const Content = (props: { children: any; }) => (
    <main className={ styles.wrapper }>{ props.children }</main>
)

export default Content;