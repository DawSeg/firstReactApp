import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavouriteCard } from '../../Redux/Store';


const Favourite = () => {
  const favouriteCards = useSelector(getFavouriteCard);
  if (favouriteCards.length === 0) {
    return(
      <div className={styles.favourite}>
        <PageTitle>No cards..</PageTitle>
      </div>
    );
  }

  return(
    <div className={styles.favourite}>
      <PageTitle>Favourite</PageTitle> 
      <div className={styles.column}>
        <ul className={styles.cards}>
        {favouriteCards.map((card) => (
          <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />
        ))} 
        </ul>
      </div>
    </div>
  );
};

export default Favourite;