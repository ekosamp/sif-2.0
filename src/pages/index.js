import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import Hero from '../containers/landing/hero'
import ServicesArea from '../containers/it-services/services-area'
import ContactArea from '../containers/global/contact-area/contact-two'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO/>
    <Header />
    <main className="site-wrapper-reveal">
        <Hero />
        <ServicesArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
