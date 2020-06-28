import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import {SectionWrap, ListGroupWrap} from './section.style'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Anchor from '../../../components/ui/anchor'
import List, {ListItem} from '../../../components/ui/list'
import { MdCheck } from "react-icons/md";

const GasServiceList = ({HeadingStyle, WarningListStyle, StepsListStyle}) => {
    const serviceQueryData = useStaticQuery(graphql `
        query ServicesQuery {
            servicesJson(id: {eq: "services-gas-service"}) {
                title
                subtitle
                annual_service
                warning_signs{
                    id
                    title
                }
                annual_service_steps{
                    id
                    title
                }
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
                        <Text>{secdata.annual_service}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} md={12}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Warning Signs:</Heading>
                            <Text>There are almost always warning signs that a fireplace isn’t working properly, including:</Text>
                            <List {...WarningListStyle}>
                                {secdata.warning_signs.map((item, index) => {
                                    return(
                                        <ListItem key={`list-${index}`}>{item.title}</ListItem>
                                    )
                                })}
                                <ListItem>symptoms of <Anchor path="https://www.fortisbc.com/safety-outages/natural-gas-safety/carbon-monoxide-safety">carbon monoxide poisoning</Anchor>: nausea, headaches, lethargy or other flu-like symptoms</ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} md={12}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Our annual service involves these steps (when applicable):</Heading>
                            <List {...StepsListStyle}>
                                {secdata.annual_service_steps.map((item, index) => {
                                    return(
                                        <ListItem key={`list-${index}`}>
                                            <MdCheck className="icon"/>{item.title}
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </ListGroupWrap>
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