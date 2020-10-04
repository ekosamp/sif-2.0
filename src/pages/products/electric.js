import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CategoryArea from '../../containers/products/category-area'

const ElectricProductsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Electric Fireplace Units" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Electric Fireplace Units"
            />
            <main className="site-wrapper-reveal">
                <CategoryArea category="electric"/>
            </main>
            <Footer />
        </Layout>
    )
}

export default ElectricProductsPage
