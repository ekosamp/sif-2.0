import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import Hero from '../containers/landing/hero'
import ProductsArea from '../containers/products'
import ContactArea from '../containers/global/contact-area/contact-two'
import ClientsArea from '../containers/global/clients-area/section-one'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO/>
    <Header />
    <main className="site-wrapper-reveal">
        <Hero />
        <ClientsArea/>
        <ProductsArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)

export default IndexPage
