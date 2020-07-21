import React from 'react'
import PropTypes from 'prop-types'
import SEO from "../../../components/seo"
import Layout from '../../../containers/layout/layout'
import Header from '../../../containers/layout/header/header-two'
import Footer from '../../../containers/layout/footer/footer-one'
import PageHeader from '../../../components/pageheader'
import Section, {Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import ProductInfoArea from '../../../containers/product-list'
import CTA from '../../../containers/global/cta-area/section-one'

const GasFireplaces = ({ pageContext, location, ...restProps }) => {
    const {sectionStyle, headingStyle} = restProps;
    return (
        <Layout location={location}>
            <SEO title="Gas Fireplaces" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="Gas Fireplaces"
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col lg={{span: 12, order: 2}} xs={{span: 12, order: 1}}>
                            <Heading {...headingStyle}>Gas Fireplaces Heading</Heading>
                            <ProductInfoArea filter="Fireplace" />
                        </Col>
                    </Row>
                </Section>
                <CTA/>
            </main>
            <Footer/>
        </Layout>
    )
}


GasFireplaces.propTypes = {
    sectionStyle: PropTypes.object
}

GasFireplaces.defaultProps = {
    sectionStyle: {
        pt: '89px',
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

export default GasFireplaces;