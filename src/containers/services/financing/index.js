import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import { Wrapper, SectionTitle, ButtonWrap, ImageWrap, ImageOne } from './team-area.style'

const FinancingSection = (props) => {
    const { headingStyle, textStyle, buttonOneStyle } = props;
    const imageData = useStaticQuery(graphql `
        query financingImgQuery {
            file(relativePath: {eq: "images/financeit.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col lg={8}>
                        <SectionTitle>
                            <Heading {...headingStyle}>South Island Fireplace has partnered with Financeit to offer fast, easy financing for your purchase.</Heading>
                            <Text {...textStyle}>Apply for financing up to $100,000.<br/>
                                Find out if you qualify in seconds. No obligation, no commitment.
                            </Text>

                            <ButtonWrap>
                                <Button {...buttonOneStyle} to='https://www.financeit.ca/s/p3NNHA'>Find out more & apply</Button>
                            </ButtonWrap>
                        </SectionTitle>
                    </Col>
                    <Col lg={4}>
                        <ImageWrap>
                            <ImageOne>
                                <Image fluid={imageData.file.childImageSharp}></Image>
                            </ImageOne>
                        </ImageWrap>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

FinancingSection.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object,
    buttonOneStyle: PropTypes.object
}

FinancingSection.defaultProps = {
    headingStyle: {
        as: 'h3',
        child: {
            color: 'primary'
        }
    },
    textStyle: {
        fontSize: '18px',
        mt: '30px'
    },
    buttonOneStyle: {
        mr: '15px',
        hover: 2
    }
}

export default FinancingSection;