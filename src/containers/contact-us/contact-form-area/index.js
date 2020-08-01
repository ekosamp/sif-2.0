import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import ContactForm from '../../../components/forms/contact-form'
import {ContactFormWrapper, LeftBox} from './contact-form-area.style'

const ContactFormArea = ({headingStyle, textStyle}) => {
    return (
        <ContactFormWrapper>
            <Container>
                <Row alignitems="center">
                    <Col lg={6}>
                        <LeftBox>
                            <Heading {...headingStyle}>Looking for help with<br/> a purchase? Can't find a <br/> product? <span>We're here to help.</span></Heading>
                            <Text {...textStyle}>Fill out the form and we'll get in touch with you as soon as we can. You can also contact us via our social
                                media channels.</Text>
                        </LeftBox>
                    </Col>
                    <Col lg={6}>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </ContactFormWrapper>
    )
}

ContactFormArea.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object
}

ContactFormArea.defaultProps = {
    headingStyle: {
        as: "h3",
        position: "relative",
        pl: '34px',
        lineheight: 1.67,
        fontweight: 600,
        child: {
            color: 'secondary'
        },
        layout: 'quote',
        before: {
            top: '50%',
            width: '4px',
            height: '94%',
            bgColor: 'secondary',
            transform: 'translateY(-50%)'
        }
    },
    textStyle: {
        mt: '15px',
        fontSize: '18px',
        ml: '34px',
        color: '#696969'
    }
}

export default ContactFormArea;