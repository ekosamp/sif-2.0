import React from 'react'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/elements/box-icon/section-three'
import {data} from '../containers/services/data.js'

const ServicesPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Services" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Services"
            />
            <main className="site-wrapper-reveal">
                <ServicesArea data={data} />
            </main>
            <Footer />
        </Layout>
    )
}

export default ServicesPage
