import React, {Fragment} from 'react';
import SpecialOffersList from '../../components/product-list/special-offers'
import {ProdWrapper, ProdBox} from './specials-area.style'
import {Row, Col} from '../../components/ui/wrapper'

class SpecialOffersArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
        }
    }

    handleChange = (name) => (event) => {
        this.setState({ ...this.state, [name]: event.target.value });
    }
    
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const allProducts = this.props.products;
        if (this.props.fuelType && this.props.productType) {
            const p = allProducts.edges.filter(n => n.node.productType.type.title === this.props.productType
                && n.node.productFuel.fuel === this.props.fuelType);
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
    }

    render() {
        const {
            products,
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
                    <ProdWrapper>
                        <Row>
                            {products.map((item, index) => (
                                <Col sm={12} md={6} lg={3} key={index}>
                                    <SpecialOffersList data={item.node} key={index} />
                                </Col>
                            ))}
                        </Row>
                    </ProdWrapper>
                </Fragment>
            )
        }
    }
}

export default SpecialOffersArea;