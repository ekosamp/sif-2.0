import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CategoryArea from '../../containers/products/category-area'

const GasProductsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Natural Gas & Propane Units" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Natural Gas & Propane Units"
            />
            <main className="site-wrapper-reveal">
                <CategoryArea category="gas"/>
            </main>
            <Footer />
        </Layout>
    )
}

export default GasProductsPage
