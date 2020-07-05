import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import {SectionWrap, ListGroupWrap} from './section.style'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Image from '../../../components/image'
import Anchor from '../../../components/ui/anchor'
import List, {ListItem} from '../../../components/ui/list'
import One from '../../../components/forms/appointment-form'
import { MdCheck } from "react-icons/md";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionWrap from '../../../components/ui/accordion'

const GasServiceList = ({HeadingStyle, WarningListStyle, StepsListStyle}) => {
    const serviceQueryData = useStaticQuery(graphql `
        query ServicesQuery {
            servicesJson(id: {eq: "services-gas-service"}) {
                title
                subtitle
                annual_service
                accordion{
                    id
                    heading
                    list{
                        id
                        title
                    }
                }
                img{
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                form_message
            }
        }
    `);

    const secdata = serviceQueryData.servicesJson;

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        <Heading {...HeadingStyle}>Recommended Annual Service</Heading>
                        <Text className="upper-section">{secdata.annual_service}</Text>
                        <AccordionWrap layout="two">
                            <Accordion allowZeroExpanded>
                                {
                                    secdata.accordion.map((el, index) => {
                                        return (
                                            <AccordionItem id={el.id} key={index}>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        {el.heading}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <ListGroupWrap>
                                                        {/* <Heading {...HeadingStyle}>Our annual service involves these steps (when applicable):</Heading> */}
                                                        <List {...StepsListStyle}>
                                                            {el.list.map((item, index) => {
                                                                return(
                                                                    <ListItem key={`list-${index}`}>
                                                                        <MdCheck className="icon"/>{item.title}
                                                                    </ListItem>
                                                                )
                                                            })}
                                                        </List>
                                                    </ListGroupWrap>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        )
                                    })
                                }
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Service call inquiry form...
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <Text>{secdata.form_message}</Text>
                                        <One/>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>     
                        </AccordionWrap>
                    </Col>
                    <Col lg={4}>
                        <Image fluid={secdata.img.childImageSharp}></Image>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

GasServiceList.propTypes = {
    HeadingStyle: PropTypes.object   
}

GasServiceList.defaultProps = {
    HeadingStyle: {
        as: 'h5',
        mb: '30px'
    },
    WarningListStyle: {
        layout: 'circle'
    },
    StepsListStyle: {
        layout: 'check'
    }
}


export default GasServiceList;