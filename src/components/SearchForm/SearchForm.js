import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = (props) => {
    return (
        <form className={styles.searchForm}>
          <TextInput placeholder="Search..." type="text" />
          <Button>
            <span className="fa fa-search" />
          </Button>
        </form>
    );
};

export default SearchForm;