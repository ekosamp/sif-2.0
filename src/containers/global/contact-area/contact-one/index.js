import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone } from "react-icons/md";
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import {SectionWrap, ContactInfoBox, ContactTextBox} from './contact.style'

const ContactArea = ({
    headingStyle, 
    descStyle,
    conactInfoStyles: {
        titleStyle,
        phoneAnchorStyle,
        btnStyle
    } 
}) => {
    const contactQueryData = useStaticQuery(graphql `
        query {
            sectionBg: file(relativePath: {eq: "images/bg/contact-bg.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 520, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            contactData: site {
                siteMetadata {
                  contact {
                    phone
                    email
                  }
                }
            }
        } 
    `);
    const imageData = contactQueryData.sectionBg.childImageSharp.fluid;
    const {phone, email} = contactQueryData.contactData.siteMetadata.contact
    return (
        <SectionWrap fluid={imageData}>
            <Container>
                <Row alignitems="center">
                    <Col lg={6}>
                        <ContactTextBox>
                            <Heading {...headingStyle}>Contact our experienced and friendly staff to obtain further information</Heading>
                            <Text {...descStyle}>We’re available 8 hours a day! <br/> We look forward to hearing from you</Text>
                        </ContactTextBox>
                    </Col>
                    <Col lg={6}>
                        <ContactInfoBox>
                            <MdPhone className="icon"/>
                            <Heading {...titleStyle}>REACH OUT NOW!</Heading>
                            {phone && (
                                <Heading><Anchor path={`tel:${phone}`} {...phoneAnchorStyle}>{phone}</Anchor></Heading>
                            )}
                            <Button to={`mailto:${email}`} {...btnStyle}>Email Us</Button>
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ContactArea.propTypes = {
    headingStyle: PropTypes.object
}
 
ContactArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        position: 'relative',
        pl: '34px',
        fontweight: 600,
        lineHeight: 1.4,
        child: {
            color: 'primary'
        }, 
        before: {
            top: '50%',
            width: '4px',
            height: '94%',
            bgColor: 'secondary',
            transform: 'translateY(-50%)'
        }
    },
    descStyle: {
        mt: '15px',
        fontSize: '18px',
        ml: '34px'
    },
    conactInfoStyles: {
        titleStyle: {
            as: 'h6',
            fontSize: '15px',
            letterspacing: '2px',
            texttransform: 'uppercase',
            mb: '10px',
            mt: '10px',
        },
        phoneAnchorStyle: {
            color: '#002fa6',
            hover: {
                layout: 2,
                color: '#002fa6'
            }
        },
        btnStyle: {
            mt: '20px',
            skin: 'secondary',
            minwidth: '230px',
            hover: {
                bgColor: 'primary'
            }
        }
    }
}

export default ContactArea;