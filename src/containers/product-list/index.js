import React, {Fragment} from 'react';
import List from '../../components/product-list/layout-two'
import Pagination from '../../components/blog/pagination'
import {ProdWrapper, ProdBox} from './prod-area.style'
import { ProdQuery } from '../../data/hooks/all-product-data'

const ProductInfoArea = ({blogBoxStyle, filter}) => {
    const allProducts = ProdQuery();
    const filteredProducts = filter
        ? allProducts.edges.filter(n => n.node.acf.type.post_title === filter)
        : allProducts.edges; // filter(n => n.node.title === 'H5')
    const {totalCount} = allProducts;
    const postsPerPage = 10;
    const numberOfPages = Math.ceil(totalCount/postsPerPage);
    return (
        <Fragment>
            <ProdWrapper>
                {filteredProducts.map(prod => (
                    <ProdBox key={prod.node.id}>
                        <List data={prod.node} />
                    </ProdBox>
                ))}
            </ProdWrapper>
            <Pagination
                rootPage="/products/"
                currentPage={1}
                numberOfPages={numberOfPages}
            />
        </Fragment>
    )
}

 
export default ProductInfoArea;