import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';

import { Cards } from './Cards';
import { Pagination } from './Pagination';

export const ProductsPageTemplate = (props) => {
    const { request } = useHttp();
    const [cards, setCards] = useState([]);
    const allCounts = useRef(0);
    const { productsPage = 0 } = useParams();

    console.log(productsPage);

    useEffect(() => {
        const skipParam = productsPage ? `?skip=${productsPage * 4}` : '';

        request(`http://testtask.alto.codes/front-products.php${skipParam}`).then((response) => {
            setCards(response.products);
            allCounts.current = response.totalCount;
        });
        // eslint-disable-next-line
    }, [productsPage]);

    return (
        <>
            <Cards cards={cards} />
            <Pagination allCounts={allCounts.current} productsPage={Number(productsPage)} />
        </>
    );
};
