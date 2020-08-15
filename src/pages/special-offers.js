import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import Section, {Row, Col} from '../components/ui/wrapper'
import SectionTitle from '../components/ui/section-title'
import SpecialOffersArea from '../containers/specials-list'
import CTA from '../containers/global/cta-area/section-one'
import { ProdQuery } from '../data/hooks/all-product-data'

const SpecialOffersPage = ({ pageContext, location, ...restProps }) => {
    const {sectionStyle, sectionTitleStyle} = restProps;
    const allProducts = ProdQuery();
    
    return (
        <Layout location={location}>
            <SEO title="Special Offers" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Special Offers"
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col xs={12}>
                            <SectionTitle
                                {...sectionTitleStyle}
                                title="Special offers and promotional items"
                                subtitle="Contact us with any questions"
                                layout="2"
                            />
                            <SpecialOffersArea
                                products={allProducts}
                                productType="Insert"
                                fuelType="Wood" />
                        </Col>
                    </Row>
                </Section>
                <CTA/>
            </main>
            <Footer />
        </Layout>
    )
}

SpecialOffersPage.propTypes = {
    sectionStyle: PropTypes.object,
    sectionTitleStyle: PropTypes.object
}

SpecialOffersPage.defaultProps = {
    sectionStyle: {
        pt: '15px',
        pb: '100px',
        responsive: {
            medium: {
                pt: '72px',
                pb: '80px'
            },
            small: {
                pt: '53px',
                pb: '60px'
            }
        }
    },
    rowStyle: {

    },
    sectionTitleStyle: {
        mt: '25px',
        mb: '40px',
        responsive: {
            small: {
                mb: '27px'
            }
        }
    }
}

export default SpecialOffersPage
