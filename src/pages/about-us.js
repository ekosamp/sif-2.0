import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-two'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../containers/about-us/page-header'
import AboutArea from '../containers/about-us/about-area'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import ClientsArea from '../containers/global/clients-area/section-one'
import ContactArea from '../containers/global/contact-area/contact-one'
import CompanyInfo from '../containers/company-info'

const AboutPage = ({location}) => (
  <Layout location={location}>
    <SEO title="About Us" />
    <Header/>
    <main className="site-wrapper-reveal">
        <PageHeader/>
        <AboutArea/>
        <CompanyInfo />
        <TestimonialArea/>
        <ClientsArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default AboutPage
 