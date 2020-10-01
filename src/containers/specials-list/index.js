import React, {Fragment} from 'react';
import SpecialOffersList from '../../components/product-list/special-offers'
import {ProdWrapper} from './specials-area.style'
import {Row, Col} from '../../components/ui/wrapper'
import Text from '../../components/ui/text'

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
        const allProducts = this.props.products.edges;
        this.setState({
            products: allProducts,
            isLoading: false
        });
    }

    render() {
        const {
            products,
            isLoading
        } = this.state
        if (isLoading) {
            return (
                <div>Loading...</div>
            )
        }
        if (!isLoading && products.length > 0) {
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
        if (!isLoading && products.length === 0) {
            return (
                <Fragment>
                    <ProdWrapper>
                        <Row>
                            <Col sm={12}>
                                <Text>Check back soon for new promotions</Text>
                            </Col>
                        </Row>
                    </ProdWrapper>
                </Fragment>
            )
        }
    }
}

export default SpecialOffersArea;