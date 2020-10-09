import React from 'react'
import Typed from 'react-typed'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import TeamMember from '../../../components/team-member'
import {TeamWrapper, TypedWrapper} from './team-area.style'

const TeamArea = ({headingStyle, teamStyle, executiveStyle}) => {
    const teamData = useStaticQuery(graphql `
        query {
            executiveMember: allTeamsJson(filter: {position: {eq: "executive"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        images {
                            large {
                                childImageSharp {
                                    fluid(maxWidth: 546, maxHeight: 330, quality: 95) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const executives = teamData.executiveMember.edges;
    return (
        <TeamWrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}>
                            <span className="not-typical">Meet our </span>
                                <TypedWrapper>
                                    <Typed
                                        strings={['professional ', 'knowledgeable ', 'friendly ', 'awesome ']}
                                        typeSpeed={55}
                                        backSpeed={70}
                                        loop
                                    />
                                </TypedWrapper>
                            <span className="not-typical">team</span>
                        </Heading>
                    </Col>
                </Row>
                <Row>
                    {executives && executives.map(executive => (
                        <Col md={6} key={executive.node.id}>
                            <TeamMember
                                {...teamStyle}
                                {...executiveStyle}
                                imageSrc={executive.node.images.large.childImageSharp}
                                name={executive.node.name}
                                designation={executive.node.designation}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </TeamWrapper>
    )
}

TeamArea.propTypes = {
    sectionStyle: PropTypes.object,
    headingStyle: PropTypes.object
}

TeamArea.defaultProps = {
    headingStyle: {
        as: "h3",
        fontSize: "40px",
        lineHeight: 1.4,
        textalign: "center",
        mb: "85px",
        child: {
            color: "secondary"
        },
        responsive: {
            large: {
                fontSize: "34px",
                mb: "70px"
            },
            medium: {
                fontSize: "28px",
                mb: "50px"
            }
        }
    },
    teamStyle: {
        layout: 2,
        wrapperStyle: {
            mb: "30px"
        },
    },
    executiveStyle: {
        infoStyle: {
            textalign: "center"
        },
        nameStyle: {
            fontSize: '18px',
            lineHeight: 1.78
        }
    }
}

export default TeamArea;