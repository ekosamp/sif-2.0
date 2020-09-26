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
            postsPerPage: 20,
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

    loadData() {
        let allProducts = this.props.products;
        if (this.props.fuelType && this.props.productType) {
            let p = []
            if (this.props.fuelType === 'Gas' && (this.props.productType === 'Fireplace' || this.props.productType === 'Insert')) {
                let valorUnits = allProducts.edges.filter(n => n.node.Brand.brand.title === 'Valor'
                    && n.node.productType.type.title === this.props.productType
                    && n.node.productFuel.fuel === this.props.fuelType);

                let otherUnits = allProducts.edges.filter(n => n.node.Brand.brand.title !== 'Valor'
                    && n.node.productType.type.title === this.props.productType
                    && n.node.productFuel.fuel === this.props.fuelType)

                valorUnits = valorUnits.sort(function (a, b) {
                    if (a.node.Brand.brand.title === b.node.Brand.brand.title) {
                        return a.node.name.name.localeCompare(b.node.name.name);
                    }
                    return a.node.Brand.brand.title.localeCompare(b.node.Brand.brand.title);
                });

                otherUnits = otherUnits.sort(function (a, b) {
                    if (a.node.Brand.brand.title === b.node.Brand.brand.title) {
                        return a.node.name.name.localeCompare(b.node.name.name);
                    }
                    return a.node.Brand.brand.title.localeCompare(b.node.Brand.brand.title);
                });

                p = valorUnits.concat(otherUnits)
            } else {
                p = allProducts.edges.filter(n => n.node.productType.type.title === this.props.productType
                    && n.node.productFuel.fuel === this.props.fuelType);
                
                p = p.sort(function (a, b) {
                    if (a.node.Brand.brand.title === b.node.Brand.brand.title) {
                        return a.node.name.name.localeCompare(b.node.name.name);
                    }
                    return a.node.Brand.brand.title.localeCompare(b.node.Brand.brand.title);
                });
            }
            this.setState({
                products: p,
                filteredProducts: p,
                brands: [...new Set(p.map(item => item.node.Brand.brand.title))],
                sizes: [...new Set(p.map(item => item.node.productSize.size))],
                totalCount: allProducts.totalCount,
                numberOfPages: Math.ceil(allProducts.length / this.state.postsPerPage),
                isLoading: false
            });
        } else if (this.props.productType) {
            let p = allProducts.edges.filter(n => n.node.productType.type.title === this.props.productType);
            p = p.sort(function (a, b) {
                if (a.node.Brand.brand.title === b.node.Brand.brand.title) {
                    return a.node.name.name.localeCompare(b.node.name.name);
                }
                return a.node.Brand.brand.title.localeCompare(b.node.Brand.brand.title);
            });
            this.setState({
                products: p,
                filteredProducts: p,
                brands: [...new Set(p.map(item => item.node.Brand.brand.title))],
                sizes: [...new Set(p.map(item => item.node.productSize.size))],
                totalCount: allProducts.totalCount,
                numberOfPages: Math.ceil(allProducts.length / this.state.postsPerPage),
                isLoading: false
            });
        }
        else {
            if (allProducts.length > 1) {
                allProducts = allProducts.sort(function (a, b) {
                    if (a.node.Brand.brand.title === b.node.Brand.brand.title) {
                        return a.node.name.name.localeCompare(b.node.name.name);
                    }
                    return a.node.Brand.brand.title.localeCompare(b.node.Brand.brand.title);
                });
            }
            this.setState({
                products: allProducts,
                filteredProducts: allProducts,
                brands: [...new Set(allProducts.map(item => item.node.Brand.brand.title))],
                sizes: [...new Set(allProducts.map(item => item.node.productSize.size))],
                totalCount: allProducts.length,
                numberOfPages: Math.ceil(allProducts.length / this.state.postsPerPage),
                isLoading: false
            });
        }
    }

    applyFilter = () => {
        let results = this.state.products
        if (this.state.keyword) {
            results = results.filter(item => item.node.name.name.toLowerCase().includes(this.state.keyword.trim().toLowerCase()))
        }
        if (this.state.brandFilter) {
            results = results.filter(item => item.node.Brand.brand.title === this.state.brandFilter)
        }
        if (this.state.sizeFilter) {
            results = results.filter(item => item.node.productSize.size === this.state.sizeFilter)
        }
        this.setState({ filteredProducts: results })
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
                <div>Loading</div>
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
                            from={{ overflow: 'hidden', height: `0%`, opacity: 0 }}
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