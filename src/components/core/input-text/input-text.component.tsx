import styles from './input-text.module.scss';

const InputText = () => {
    return (
        <>
            <input type='text' placeholder='Search...' className={ styles.input }/>
        </>
    )
}

export default InputText;