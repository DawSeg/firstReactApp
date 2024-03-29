import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { useSelector } from "react-redux";

const Column = (props) => {
  const searchString = useSelector((state) => state.searchString);
  const cards = useSelector((state) =>
    state.cards.filter(
      (card) =>
        card.columnId === props.id &&
        card.title.toLowerCase().includes(searchString.toLowerCase())
    )
  );

  return (
    <article className={styles.column}>
      <h3 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon} />
        {props.title}
      </h3>
      <ul className={styles.cards}>
      {cards.map((card) => ( <Card key={card.id} title={card.title} id={card.id} isFavourite={card.isFavourite} />))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
