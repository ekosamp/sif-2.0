import React, {Fragment} from 'react';
import List from '../../components/product-list/layout-two'
import Pagination from '../../components/pagination'
import {ProdWrapper, ProdBox} from './prod-area.style'
import Filter from '../../components/filter'
import {Transition} from 'react-spring/renderprops'

class ProductInfoArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fuelType: '',
            productType: '',
            products: [],
            filteredProducts: [],
            totalCount: 1,
            postsPerPage: 10,
            numberOfPages: 1,
            keyword: '',
            brandFilter: '',
            brands: [],
            sizeFilter: '',
            sizes: [],
            pageOfItems: [],
            isLoading: true
        }

        this.onChangePage = this.onChangePage.bind(this);
    }

    handleChange = (name) => (event) => {
        this.setState({ ...this.state, [name]: event.target.value });
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    
    componentDidMount() {
        this.loadData();
    }

    applyFilter = () => {
        if (this.state.keyword) {
            this.setState({ filteredProducts: this.state.products
                .filter(item => item.node.title.toLowerCase().includes(this.state.keyword.toLowerCase())) })
        }
        if (this.state.brandFilter) {
            this.setState({ filteredProducts: this.state.products
                .filter(item => item.node.acf.brand.post_title === this.state.brandFilter) })
        }
        if (this.state.sizeFilter) {
            this.setState({ filteredProducts: this.state.products
                .filter(item => item.node.acf.size === this.state.sizeFilter) })
        }
    }

    clearFilters = () => {
        this.setState({
            filteredProducts: this.state.products,
            keyword: '',
            brandFilter: '',
            sizeFilter: ''
        })
    }

    loadData() {
        const allProducts = this.props.products;
        if (this.props.fuelType && this.props.productType) {
            const p = allProducts.edges.filter(n => n.node.acf.type.post_title === this.props.productType
                && n.node.acf.fuel === this.props.fuelType);
            this.setState({
                products: p,
                filteredProducts: p,
                brands: [...new Set(p.map(item => item.node.acf.brand.post_title))],
                sizes: [...new Set(p.map(item => item.node.acf.size))],
                totalCount: allProducts.totalCount,
                numberOfPages: Math.ceil(allProducts.length / this.state.postsPerPage),
                isLoading: false
            });
        }
        else {
            this.setState({
                products: allProducts,
                filteredProducts: allProducts,
                brands: [...new Set(allProducts.map(item => item.node.acf.brand.post_title))],
                sizes: [...new Set(allProducts.map(item => item.node.acf.size))],
                totalCount: allProducts.length,
                numberOfPages: Math.ceil(allProducts.length / this.state.postsPerPage),
                isLoading: false
            });
        }
    }

    render() {
        const {
            keyword,
            brands,
            sizes,
            postsPerPage,
            filteredProducts,
            pageOfItems,
            isLoading
        } = this.state
        if (isLoading) {
            return (
                <div></div>
            )
        }
        if (!isLoading) {
            return (
                <Fragment>
                    <Filter
                        handleChange={this.handleChange}
                        keyword={keyword}
                        applyFilter={this.applyFilter}
                        clearFilters={this.clearFilters}
                        brands={brands}
                        sizes={sizes}
                    />
                    <ProdWrapper>
                        <Transition
                            items={pageOfItems} keys={item => item.node.id}
                            initial={null}
                            from={{ overflow: 'hidden', height: 0, opacity: 0 }}
                            enter={{ height: `100%`, opacity: 1 }}
                            leave={{ opacity: 0 }}
                            config={{ duration: 300, tension: 50, friction: 25 }}
                        >
                            {item => props => 
                                <ProdBox style={props} key={item.node.id}>
                                    <List style={props} data={item.node} />
                                </ProdBox>
                            }
                        </Transition>
                    </ProdWrapper>
                    <Pagination
                        items={filteredProducts}
                        pageSize={postsPerPage}
                        onChangePage={this.onChangePage} />
                </Fragment>
            )
        }
    }
}

export default ProductInfoArea;