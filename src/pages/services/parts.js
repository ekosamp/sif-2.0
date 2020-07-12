import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-two'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import ContactArea from '../../containers/global/contact-area/contact-one'
import PartsFormArea from '../../containers/services/parts'

const PartsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Replacement Parts" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Replacement Parts"
            />
            <main className="site-wrapper-reveal">
                <PartsFormArea/>
                <ContactArea/>
            </main>
            <Footer />
        </Layout>
    )
}

export default PartsPage
