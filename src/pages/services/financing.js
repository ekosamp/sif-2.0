import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import FinancingSection from '../../containers/services/financing'

const FinancingPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Financing from Financeit" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Financing"
            />
            <main className="site-wrapper-reveal">
                <FinancingSection/>
            </main>
            <Footer />
        </Layout>
    )
}

export default FinancingPage
