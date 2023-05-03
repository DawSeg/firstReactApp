import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchString, getSearchString } from "../../Redux/searchStringRedux";

const SearchForm = (props) => {
  const searchStringValue = useSelector(getSearchString);
  const [curentSearchString, setCurentSearchString] = useState(searchStringValue);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(curentSearchString));
    setCurentSearchString("");
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        type="text"
        value={curentSearchString}
        onChange={(e) => setCurentSearchString(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
