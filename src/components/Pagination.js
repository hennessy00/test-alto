import { Link } from 'react-router-dom';

export const Pagination = (props) => {
    const { productsPage, allCounts } = props;
    const links = [];
    const maxPaginationNumber = Math.ceil(allCounts / 4);

    for (let index = 0; index < allCounts; index++) {
        if (index < maxPaginationNumber || index === 0) {
            links.push(
                <Link
                    to={`/${index}`}
                    className={`pagination__item ${
                        productsPage === index || (productsPage !== productsPage && index === 0)
                            ? 'pagination__item_current'
                            : ''
                    }`}
                    key={index}
                >
                    <span>{index}</span>
                </Link>
            );
        }
    }

    return (
        <div className="pagination">
            <Link
                to={`/${productsPage - 1}`}
                className={`pagination__item pagination__item_long ${
                    productsPage < 1 || productsPage !== productsPage
                        ? 'pagination__item_disabled'
                        : ''
                }`}
            >
                Назад
            </Link>
            {links}
            <Link
                to={`/${productsPage + 1}`}
                className={`pagination__item pagination__item_long ${
                    productsPage >= maxPaginationNumber - 1 ? 'pagination__item_disabled' : ''
                }`}
            >
                Вперед
            </Link>
        </div>
    );
};
