import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import Search from '../components/searchContainer'
import Heading from '../components/ui/heading'
import Section, {Row, Col} from '../components/ui/wrapper'
import CTAArea from '../containers/global/cta-area/section-one'
import Emoji from '../components/ui/emojis'
import { ProdQuery } from '../data/hooks/all-product-data'

const SearchResults = ({ pageContext, location, ...restProps }) => {
    const {sectionStyle, headingStyle} = restProps;
    const allProducts = ProdQuery();

    if (!location.state) {
        return (
            <Layout location={location}>
                <SEO title="Search Results" />
                <Header isSearchResults={true}/>
                <main className="site-wrapper-reveal">
                    <Section {...sectionStyle}>
                        <Row>
                            <Col xs={12}>
                                <Heading {...headingStyle}>Search results for: {<Emoji symbol="👽"/>}</Heading>
                                <Search
                                    products={allProducts}
                                    keyword={``} />
                            </Col>
                        </Row>
                    </Section>
                    <CTAArea/>
                </main>
                <Footer />
            </Layout>
        )
    } else {
        return (
            <Layout location={location}>
                <SEO title="Search Results" />
                <Header isSearchResults={true}/>
                <main className="site-wrapper-reveal">
                    <Section {...sectionStyle}>
                        <Row>
                            <Col xs={12}>
                                <Heading {...headingStyle}>Search results for: "{location.state.keyword}"</Heading>
                                <Search
                                    products={location.state.products}
                                    keyword={location.state.keyword} />
                            </Col>
                        </Row>
                    </Section>
                    <CTAArea/>
                </main>
                <Footer />
            </Layout>
        )
    }
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
    },
    headingStyle: {
        as: 'h3',
        mb: '20px',
        mt: '15px',
        textalign: 'center',
        child: {
            color: 'primary'
        },
        responsive: {
            medium: {
                mb: '20px'
            }
        }
    }
}

export default SearchResults
