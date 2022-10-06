import imageCart from '../assets/Cart.svg';

export const Item = ({
    name,
    price,
    image_url,
    image_width,
    image_height,
    short_desc,
    availability,
    color,
}) => {
    const viewColor = color ? <span>Цвет - {color}</span> : null;
    const viewBadge = availability
        ? ['В наличии', 'card__badge_availability']
        : ['Под заказ', null];
    return (
        <div className="card">
            <div className="card__img">
                <img src={image_url} height={image_height} width={image_width} alt="" />
            </div>
            <div className="card__content">
                <span className={'card__badge ' + viewBadge[1]}>{viewBadge[0]}</span>
                <a href="/#" className="card__title">
                    {name}
                </a>
                <div className="card__cost">{price} ₽</div>
            </div>
            <div className="card__spoiler">
                <div className="card__props">
                    {viewColor}
                    <span>{short_desc}</span>
                </div>

                <button className="button">
                    <img src={imageCart} alt="" />
                    <span>В корзину</span>
                </button>
            </div>
        </div>
    );
};
