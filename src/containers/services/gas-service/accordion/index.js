import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionWrap from '../../../../components/ui/accordion'
import Heading from '../../../../components/ui/heading'
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import {SectionWrap} from './section.style'

const AccordionArea = ({sectionStyle, headingStyle, data, ...props}) => {

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={8} ml="auto" mr="auto">
                        <Heading {...headingStyle}>{data.heading}</Heading>
                        <AccordionWrap layout="two">
                            <Accordion allowZeroExpanded preExpanded={[data[0].id]}>
                                {
                                    data.map((el, index) => {
                                        return (
                                            <AccordionItem id={el.id} key={index}>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        {el.title}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>{el.content}</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        )
                                    })
                                }
                            </Accordion>     
                        </AccordionWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

AccordionArea.propTypes = {
    headingStyle: PropTypes.object
}

AccordionArea.defaultProps = {
    headingStyle: {
        as: 'h4',
        mb: '14px'
    }
}

export default AccordionArea
