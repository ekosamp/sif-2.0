import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import PricingTable from '../../../components/pricing-table'
import {SectionWrap} from './pricing-area.style'

const PricingArea = ({sectionTitleStyle}) => {
    const pricingData = useStaticQuery(graphql `
        query ServicePricingQuery {
            servicesJson(id: {eq: "services-pricing-contnet"}) {
                title
                subtitle
            }
            allPricingJson {
                edges {
                    node {
                        id
                        title
                        price {
                            amount
                            period
                        }
                        is_featured
                        path
                        features {
                            id
                            text
                        }
                        image {
                            childImageSharp {
                                fixed(width: 90, height: 90, quality: 100) {
                                    ...GatsbyImageSharpFixed_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const {title, subtitle} = pricingData.servicesJson;
    const pricings = pricingData.allPricingJson.edges;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={title}
                            subtitle={subtitle}
                        />
                    </Col>
                </Row>
                <Row alignitems="center">
                    {pricings && pricings.map(pricing => (
                        <Col lg={4} md={6} key={pricing.node.id}>
                            <PricingTable
                                title={pricing.node.tiele}
                                price={pricing.node.price}
                                path={pricing.node.path}
                                features={pricing.node.features}
                                image={pricing.node.image.childImageSharp.fixed}
                                isFeatured={pricing.node.is_featured}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    )
}

PricingArea.defaultProps = {
    sectionTitleStyle: {
        mb: '60px',
        responsive: {
            small: {
                mb: '47px'
            }
        }
    }
}

export default PricingArea
