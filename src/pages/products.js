import React from 'react'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import ProductsArea from '../containers/products'
import PageHeader from '../components/pageheader'

const ProductsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Products" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Products"
            />
            <main className="site-wrapper-reveal">
                <ProductsArea/>
            </main>
            <Footer />
        </Layout>
    )
}

export default ProductsPage
