import { Item } from './Item';
import Spinner from '../components/Spinner';

export const Cards = (props) => {
    const { cards } = props;

    return cards.length ? (
        <div className="cards">
            {cards.map((card) => (
                <Item key={card.id} {...card} />
            ))}
        </div>
    ) : (
        <Spinner />
    );
};
