import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CategoryArea from '../../containers/products/category-area'

const OutdoorProductsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Outdoor Living Products" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Outdoor Living Products"
            />
            <main className="site-wrapper-reveal">
                <CategoryArea category="outdoor"/>
            </main>
            <Footer />
        </Layout>
    )
}

export default OutdoorProductsPage
