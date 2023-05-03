import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../Redux/CardsRedux';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = props =>{
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavourite(props.id));
  };


  return(
    <li className={styles.card}>
      {props.title}
      <button className={clsx(styles.button, props.isFavourite && styles.isActive)} onClick={clickHandler}>
        <i className={'fa fa-star-o'} />
      </button>
    </li>
  );
};
export default Card;