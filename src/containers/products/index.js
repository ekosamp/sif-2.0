import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../components/ui/heading'
import Anchor from '../../components/ui/anchor'
import {Container, Row, Col} from '../../components/ui/wrapper'
import SectionTitle from '../../components/ui/section-title'
import BoxLargeImage from '../../components/box-large-image/layout-one'
import {SectionWrap, SectionBottom} from './products-area.style'

const ProductsArea = (props) => {
    const featuredDataQuery = useStaticQuery(graphql `
        query ProductsTileQueryData {
            allProductTypesJson {
                edges {
                    node {
                        title
                        categories {
                            title
                            desc
                            path
                            image {
                                childImageSharp{
                                    fixed(width:400, height: 250, quality: 100 ){
                                        ...GatsbyImageSharpFixed_noBase64
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `); 
    const {linkStyle, headingStyle} = props;
    const productsData = featuredDataQuery.allProductTypesJson.edges;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle="Our Products"
                            title={productsData[0].node.title}
                        />
                    </Col>
                </Row>
                <Row>
                    {productsData[0].node.categories.map((product, index) => (
                        <Col lg={3} md={6} className="box-item" key={`${index}-${product.id}`}>
                            <BoxLargeImage 
                                title={product.title}
                                imageSrc={product.image.childImageSharp}
                                path={product.path}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <SectionBottom>
                            <Heading {...headingStyle}><Anchor {...linkStyle} path="/contact-us">Contact us</Anchor> if you can't find exactly what you're looking for. </Heading>
                        </SectionBottom>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ProductsArea.propTypes = {
    headingStyle: PropTypes.object,
    linkStyle: PropTypes.object
}

ProductsArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333'
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default ProductsArea;