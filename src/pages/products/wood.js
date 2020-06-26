import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CategoryArea from '../../containers/products/category-area'
import ContactArea from '../../containers/global/contact-area/contact-one'

const WoodProductsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Wood Burning Categories" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Wood Burning Categories"
            />
            <main className="site-wrapper-reveal">
                <CategoryArea category="wood"/>
                <ContactArea/>
            </main>
            <Footer />
        </Layout>
    )
}

export default WoodProductsPage
