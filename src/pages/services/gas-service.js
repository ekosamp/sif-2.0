import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import ContactArea from '../../containers/global/contact-area/contact-one'
import GasServiceList from '../../containers/services/gas-service'

const GasServicePage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Gas Fireplace Service & Maintenance" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Gas Service"
            />
            <main className="site-wrapper-reveal">
                <GasServiceList/>
                <ContactArea/>
            </main>
            <Footer />
        </Layout>
    )
}

export default GasServicePage
