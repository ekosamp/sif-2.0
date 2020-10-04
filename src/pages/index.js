import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import Hero from '../containers/landing/hero'
import ProductsArea from '../containers/products'
import ContactArea from '../containers/global/contact-area/contact-two'
import ClientsArea from '../containers/global/clients-area/section-one'
import CTAArea from '../containers/global/cta-area/section-two'
import CompanyInfo from '../containers/company-info'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Your local hearth dealer - Duncan, BC" />
    <Header />
    <main className="site-wrapper-reveal">
        <Hero />
        <CompanyInfo />
        <ProductsArea/>
        <ClientsArea/>
        <CTAArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
