import React, {Fragment} from 'react';
import List from '../../components/product-list/layout-two'
import Pagination from '../../components/blog/pagination'
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
            sizes: []
        }
    }

    handleChange = (name) => (event) => {
        this.setState({ ...this.state, [name]: event.target.value });
    }
    
    componentDidMount() {
        const allProducts = this.props.products;
        if (this.props.fuelType && this.props.productType) {
            const p = allProducts.edges.filter(n =>
                n.node.acf.type.post_title === this.props.productType
                && n.node.acf.fuel === this.props.fuelType);
            this.setState({
                products: p,
                filteredProducts: p,
                brands: [...new Set(p.map(item => item.node.acf.brand.post_title))],
                sizes: [...new Set(p.map(item => item.node.acf.size))]
            });
        } else {
            this.setState({
                products: allProducts.edges,
                filteredProducts: allProducts.edges
            });
        }

        this.setState({
            totalCount: allProducts.totalCount,
            numberOfPages: Math.ceil(this.state.totalCount/this.state.postsPerPage)
        })
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

    render() {
        return (
            <Fragment>
                <Filter
                    handleChange={this.handleChange}
                    keyword={this.state.keyword}
                    applyFilter={this.applyFilter}
                    clearFilters={this.clearFilters}
                    brands={this.state.brands}
                    sizes={this.state.sizes}
                />
                <ProdWrapper>
                    <Transition
                        items={this.state.filteredProducts} keys={item => item.node.id}
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
                    rootPage="/products/"
                    currentPage={1}
                    numberOfPages={this.state.numberOfPages}
                />
            </Fragment>
        )
    }
}

export default ProductInfoArea;