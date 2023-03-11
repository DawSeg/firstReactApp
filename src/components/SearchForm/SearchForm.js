import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
const SearchForm = (props) => {
    return (
        <form className={styles.searchForm}>
          <TextInput placeholder="Search..." type="text" />
          <Button text="Search" />
        </form>
    );
};

export default SearchForm;