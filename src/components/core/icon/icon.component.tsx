import styles from './icon.module.scss';
import icons from './icons.map';

interface IIcon {
    name: string;
    size?: 'small' | 'medium' | 'large';
}

const Icon = ({ name, size = 'medium' }: IIcon) => {
    return (
        <span className={ `${styles.wrapper} ${styles[size]}` }>
            <svg
                xmlns = 'http://www.w3.org/2000/svg'
                height = { 24 }
                width = { 24 }
                viewBox = { `0 0 24 24` }
                fill = 'currentColor'
                dangerouslySetInnerHTML={{ __html: icons[name]}}
            />
        </span>
    )
};

export default Icon;