import React from 'react'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import SectionTwo from '../containers/elements/tabs/section-two'
import SectionThree from '../containers/elements/box-large-image/section-three'

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
                {/* <SectionTwo /> */}
                <SectionThree />
            </main>
            <Footer />
        </Layout>
    )
}

export default ProductsPage
