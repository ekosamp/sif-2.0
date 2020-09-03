import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from 'react-bootstrap'
import Heading from '../../../components/ui/heading'
import Button from '../../../components/ui/button'
import {HeroWrapper, HeroWrapperText} from './hero.style'

const Hero = ({headingSecondary, headingPrimary, buttonStyle}) => {
    const heroData = useStaticQuery(graphql `
        query LandingHeroQuery {
            landingJson(id: {eq: "landing-hero-content"}) {
                title
                subtitle
                bgImage {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }    
    `);
    const {title, subtitle, bgImage} = heroData.landingJson;
    return(
        <HeroWrapper fluid={bgImage.childImageSharp.fluid}>
            <Container fluid className="xp-150">
                <Row className="align-items-center h-100">
                    <Col lg={6}>
                        <HeroWrapperText>
                            {subtitle && <Heading {...headingSecondary}>{subtitle}</Heading>}
                            {title && <Heading {...headingPrimary}>{title}</Heading>}
                            <Button {...buttonStyle} to="/products">Browse products</Button>
                        </HeroWrapperText>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    )
}
 
Hero.propTypes = {
    headingSecondary: PropTypes.object,
    headingPrimary: PropTypes.object
}

Hero.defaultProps = {
    headingSecondary: {
        as: 'h6',
        color: 'secondary',
        letterspacing: '2px',
        fontweight: 700,
        fontSize: '16px',
        texttransform: 'uppercase',
        mb: '30px'
    },
    headingPrimary: {
        as: 'h2',
        color: '#fff',
        fontweight: 500,
        mb: '30px'
    },
    buttonStyle: {
        size: 'large',
        to: '#section-demos',
        mt: '40px',
        responsive: {
            xlarge: {
                mt: '10px'
            }
        }
    }
}

export default Hero;