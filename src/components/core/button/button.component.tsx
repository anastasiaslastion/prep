import styles from './button.module.scss';

interface IButton {
    children: any;
    type?: 'default' | 'withIcon',
}

const Button = ({ children, type = 'default' }: IButton) => {
    return (
        <button className={ `${styles.button} ${type === 'withIcon' ? styles.withIcon : ''} ` }>
            { children }

            <span className={ styles.ripple }></span>
        </button>
    )
};

export default Button;

