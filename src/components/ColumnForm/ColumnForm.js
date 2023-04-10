import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon});
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span> 
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputStyle} />            
            <span className={styles.inputText}>Icon: </span>
            <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} className={styles.inputStyle} />
            <Button>add Column</Button>
        </form>
	);
};
export default ColumnForm;