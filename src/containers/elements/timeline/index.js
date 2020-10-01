import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Timeline from '../../../components/ui/timeline'
import Line from '../../../components/ui/divider/line'
import ImageOne from '../../../data/images/about-us/rabeys.jpg'
import ImageTwo from '../../../data/images/about-us/ketchs.jpg'
import { SectionWrap } from './style'

const TimelineArea = ({sectionTitleStyle}) => {
    const content = [
        {
            image: ImageOne,
            title: "The Rabeys",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget faucibus nibh. Donec fringilla purus nec sodales lobortis. Pellentesque nibh risus, blandit ut eros fermentum, auctor tincidunt felis."
        },
        {
            image: ImageTwo,
            title: "The Ketchs",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget faucibus nibh. Donec fringilla purus nec sodales lobortis. Pellentesque nibh risus, blandit ut eros fermentum, auctor tincidunt felis."
        }
    ]
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Line mb="50px" />
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={`Family owned and operated`}
                        />
                        <Timeline items={content} />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

TimelineArea.propTypes = {
    sectionTitleStyle: PropTypes.object
}

TimelineArea.defaultProps = {
    sectionTitleStyle: {
        mb: '40px',
        responsive: {
            small: {
                mb: '30px'
            }
        }
    }
}

export default TimelineArea
