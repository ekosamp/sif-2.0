import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import Search from '../components/searchContainer'
import Section, {Row, Col} from '../components/ui/wrapper'
import CTAArea from '../containers/global/cta-area/section-one'
import { ProdQuery } from '../data/hooks/all-product-data'

const SearchResults = ({ pageContext, location, ...restProps }) => {
    const {sectionStyle} = restProps;
    const allProducts = ProdQuery();

    const hasState = () => {
        return (
            <Col xs={12}>
                <Search
                    products={location.state.products}
                    keyword={location.state.keyword} />
            </Col>
        )
    }

    const noState = () => {
        return (
            <Col xs={12}>
                <Search
                    products={allProducts}
                    keyword={``} />
            </Col>
        )
    }

    return (
        <Layout location={location}>
            <SEO title="Search Results" />
            <Header isSearchResults={true}/>
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        { location.state ? hasState() : noState() }
                    </Row>
                </Section>
                <CTAArea/>
            </main>
            <Footer />
        </Layout>
    )
}

SearchResults.propTypes = {
    sectionStyle: PropTypes.object
}

SearchResults.defaultProps = {
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
    }
}

export default SearchResults
