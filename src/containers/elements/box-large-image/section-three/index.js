import React from 'react';
import PropTypes from 'prop-types'
import SectionTitle from '../../../../components/ui/section-title'
import Anchor from '../../../../components/ui/anchor'
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import {SectionWrap} from './section.style'
import BoxLargeImage from '../../../../components/box-large-image/layout-two'
import Heading from '../../../../components/ui/heading'

import stove from '../../../../data/images/products/wood-stove.jpg'
import insert from '../../../../data/images/products/wood-insert.jpg'
import fireplace from '../../../../data/images/products/wood-fireplace.jpg'

const BoxSection = ({linkStyle, sectionTitleStyle, sectionBottomStyle, boxStyles, headingStyle}) => {
    const boxContents = [
        {
            id: 1,
            imageSrc: stove,
            title: 'Wood Stoves',
            desc: '...'
        },
        {
            id: 2,
            imageSrc: insert,
            title: 'Wood Inserts',
            desc: '...'
        },
        {
            id: 3,
            imageSrc: fireplace,
            title: 'Wood Fireplaces',
            desc: '...'
        }
    ]
    return(
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle="Our Products"
                            title="[work in progress]"
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        boxContents.map(boxContent => {
                            return (
                                <Col lg={4} md={6} className="box-item" key={`box-image-${boxContent.id}`}>
                                    <BoxLargeImage 
                                        {...boxStyles} 
                                        imageSrc={boxContent.imageSrc}
                                        title={boxContent.title}
                                        desc={boxContent.desc}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row {...sectionBottomStyle}>
                    <Col lg={12}>
                        <Heading {...headingStyle}><Anchor {...linkStyle} path="/contact-us">Contact us</Anchor> if you can't find exactly what you're looking for. </Heading>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

BoxSection.propTypes = {
    sectionTitleStyle: PropTypes.object,
    headingStyle: PropTypes.object,
    linkStyle: PropTypes.object,
    boxStyles: PropTypes.object
}

BoxSection.defaultProps = {
    sectionTitleStyle: {
        mb: '20px',
        responsive: {
            medium: {
                mb: '10px'
            }
        }
    },
    boxStyles: {
        headingStyle: {
            color: '#000'
        }
    },
    linkStyle: {
        layout: 'underline',
        fontSize: '18px',
        fontWeight: 500,
        lineheight: 1.40,
        color: 'primary',
        hover: {
            layout: 2
        }
    },
    sectionBottomStyle: {
        mt: '40px',
        align: 'center'
    },
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333'
    }
}

export default BoxSection;