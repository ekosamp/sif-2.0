import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import parse from 'html-react-parser'
import {Container} from 'react-bootstrap'
import Logo from '../../../../assets/images/logo/dark-logo-160x48.png'
import financeIt from '../../../../assets//images/logo/finance-it-logo.jpg'
import {Row, Col} from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import Heading from '../../../../components/ui/heading'
import Social, {SocialLink} from '../../../../components/ui/social'
import {
    FooterWrap, 
    FooterTop, 
    FooterWidget, 
    LogoWidget, 
    TextWidget, 
    FooterWidgetList, 
    FooterBottom
} from './footer.style'

const Footer = ({copyrightStyle, ...props}) => {
    const siteInfo = useStaticQuery(graphql `
        query FooterSiteQuery {
            site {
                siteMetadata {
                    copyright
                    authorContact
                    contact {
                        phone
                        email
                        address
                        website
                    }
                    social {
                        facebook
                        instagram
                        linkedin
                    }
                }
            }
        }      
    `)
    const {phone, email, address, website} = siteInfo.site.siteMetadata.contact;
    const {copyright} = siteInfo.site.siteMetadata;
    const {facebook, instagram, linkedin} = siteInfo.site.siteMetadata.social;
    const ddContact = siteInfo.site.siteMetadata.authorContact;
    return (
        <FooterWrap {...props}>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={4} sm={6}>
                            <FooterWidget responsive={{medium:{mb: '31px'}}}>
                                <LogoWidget>
                                    <img src={Logo} alt="Logo"/>
                                </LogoWidget>
                                <TextWidget>
                                    {address && <Text mb="10px">{address}</Text>                                    }
                                    {email && <Text mb="10px"><Anchor path={`mailto:${email}`} color="textColor" hoverstyle="2">{email}</Anchor></Text>}
                                    {phone && <Text mb="10px"><Anchor path={`tel:${phone}`} fontWeight="800" color="#333" hoverstyle="2">{phone}</Anchor></Text>}
                                    {website && <Text mb="10px"><Anchor path={website} hoverstyle="2">{website}</Anchor></Text>}
                                </TextWidget>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={0}>
                            <FooterWidget responsive={{medium:{mb: '31px'}}}></FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget responsive={{medium:{mb: '27px'}}}>
                                <Heading as="h6"  mt="-3px" mb="20px">Quick links</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/products/wood" color="textColor" hoverstyle="2">Wood</Anchor></li>
                                    <li><Anchor path="/products/gas" color="textColor" hoverstyle="2">Gas</Anchor></li>
                                    <li><Anchor path="/products/electric" color="textColor" hoverstyle="2">Electric</Anchor></li>
                                    <li><Anchor path="/products/outdoor" color="textColor" hoverstyle="2">Outdoor</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget>
                                <Heading as="h6"  mt="-3px" mb="20px">Support</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/contact-us" color="textColor" hoverstyle="2">Contact Us</Anchor></li>
                                    <li><Anchor path="/about-us" color="textColor" hoverstyle="2">About Us</Anchor></li>
                                    <li><Anchor path="/leadership" color="textColor" hoverstyle="2">Leadership</Anchor></li>
                                    {/* <li><Anchor path="/" color="textColor" hoverstyle="2">Help &amp; FAQ</Anchor></li> */}
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget responsive={{small:{mt: '20px'}}}>
                                <FooterWidgetList>
                                    <li>
                                        <Button to="https://www.financeit.ca/s/p3NNHA" imgbutton="true" shadow="true">
                                            <img src={financeIt} alt="Finance It - South Island Fireplace"/></Button>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Row className="align-items-center">
                        <Col md={8} className="text-center text-md-left">
                            {copyright && <Text {...copyrightStyle}>&copy; {new Date().getFullYear()} {parse(copyright)}
                            {" "}Web design by <Anchor path={ddContact} hoverstyle="2">Danny Di Iorio</Anchor></Text>}
                        </Col>
                        <Col md={4} className="text-center text-md-right">
                            <Social space={8} shape="rounded" varient="outlined">
                                {facebook && (
                                    <SocialLink 
                                        path={facebook}
                                        label="Facebook">
                                            <TiSocialFacebook/>
                                    </SocialLink>
                                )}
                                {instagram && (
                                    <SocialLink 
                                        path={instagram} 
                                        label="Instagram">
                                            <TiSocialInstagram/>
                                    </SocialLink>
                                )}
                                {linkedin && (
                                    <SocialLink 
                                        path={linkedin}
                                        label="Linkedin">
                                            <TiSocialLinkedin/>
                                    </SocialLink>
                                )}
                            </Social>
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    )
} 
  
Footer.propTypes = {
    bgcolor: PropTypes.string,
    reveal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Footer.defaultProps = {
    bgcolor: '#F8F8F8',
    reveal: 'false' ,
    copyrightStyle: {
        responsive: {
            small: {
                pb: '15px'
            }
        }
    }
};

export default Footer
