import React from 'react'
import PropTypes from 'prop-types'
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-two'
import Footer from '../../../containers/layout/footer/footer-one'
import PageHeader from '../../../components/pageheader'
import Section, {Row, Col} from '../../../components/ui/wrapper'
import ProductInfoArea from '../../../containers/product-list'
import CTA from '../../../containers/global/cta-area/section-one'
import { ProdQuery } from '../../../data/hooks/all-product-data'

const ElectricInserts = ({ pageContext, location, ...restProps }) => {
    const {sectionStyle} = restProps;
    const allProducts = ProdQuery();

    return (
        <Layout location={location}>
            <SEO title="Electric Fireplace Inserts" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="Electric Fireplace Inserts"
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col xs={12}>
                            <ProductInfoArea
                                products={allProducts}
                                productType="Insert"
                                fuelType="Electric" />
                        </Col>
                    </Row>
                </Section>
                <CTA/>
            </main>
            <Footer/>
        </Layout>
    )
}


ElectricInserts.propTypes = {
    sectionStyle: PropTypes.object
}

ElectricInserts.defaultProps = {
    sectionStyle: {
        pt: '15px',
        pb: '100px',
        responsive: {
            medium: {
                pt: '15px',
                pb: '80px'
            },
            small: {
                pt: '15px',
                pb: '60px'
            }
        }
    },
    headingStyle: {
        as: 'h3',
        mb: '70px',
        textalign: 'center',
        child: {
            color: 'primary'
        },
        responsive: {
            medium: {
                mb: '50px'
            }
        }
    }
}

export default ElectricInserts;