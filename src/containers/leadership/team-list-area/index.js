import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col, Box} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import {TeamListWrapper} from './team-list-area.style'
 
const TeamListArea = ({headingStyle, boxStyles}) => {
    const teamData = useStaticQuery(graphql `
        query {
            TeamSales: allTeamsJson(filter: {position: {eq: "sales"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            TeamInstalls: allTeamsJson(filter: {position: {eq: "installs"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            TeamOffice: allTeamsJson(filter: {position: {eq: "office"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    `)
    const sales = teamData.TeamSales.edges;
    const installs = teamData.TeamInstalls.edges;
    const office = teamData.TeamOffice.edges;
    return (
        <TeamListWrapper>
            <Container>
                <Row>
                    <Col md={3}>
                        <Heading {...headingStyle}>Sales</Heading>
                        <Box {...boxStyles}>
                            {sales && sales.map(item => (
                                <Text key={item.node.id}>{item.node.name}</Text>
                            ))}
                        </Box>
                    </Col>
                    <Col md={3}>
                        <Heading {...headingStyle}>Installs</Heading>
                        <Box {...boxStyles}>
                            {installs && installs.map(item => (
                                <Text key={item.node.id}>{item.node.name}</Text>
                            ))}
                        </Box>
                    </Col>
                    <Col md={3}>
                        <Heading {...headingStyle}>Office Personnel</Heading>
                        <Box {...boxStyles}>
                            {office && office.map(staff => (
                                <Text key={staff.node.id}>{staff.node.name}</Text>
                            ))}
                        </Box>
                    </Col>
                </Row>
            </Container>
        </TeamListWrapper>
    )
}

TeamListArea.propTypes = {
    headingStyle: PropTypes.object,
    boxStyles: PropTypes.object
}

TeamListArea.defaultProps = {
    headingStyle: {
        as: "h3",
        fontSize: "15px",
        texttransform: "uppercase",
        letterspacing: "1px",
        mb: "22px"
    },
    boxStyles: {
        responsive: {
            small: {
                mb: "41px"
            }
        }
    }
}

export default TeamListArea;