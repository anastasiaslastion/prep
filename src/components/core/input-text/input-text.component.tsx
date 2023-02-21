import styles from './input-text.module.scss';

import Icon from '../icon/icon.component';

const InputText = () => {
    return (
        <div className={ styles.wrapper }>
            <span className={ styles.icon }>
                <Icon name='search' viewbox='0 96 960 960' />
            </span>
            <input type='text' placeholder='Search...' className={ styles.input }/>
        </div>
    )
}

export default InputText;