import { useDispatch } from "react-redux";
import { toggleCardFavourite, removeCard } from "../../Redux/CardsRedux";
import styles from "./Card.module.scss";
import clsx from "clsx";

const Card = (props) => {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavourite(props.id));
  };

  const clickTrash = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          className={clsx(styles.button, props.isFavorite && styles.isActive)}
          onClick={clickHandler}
        >
          <i className={"fa fa-star-o"} />
        </button>
        <button className={styles.button} onClick={clickTrash}>
          <i className={"fa fa-trash"} />
        </button>
      </div>
    </li>
  );
};
export default Card;
