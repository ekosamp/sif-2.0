import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import parse from 'html-react-parser'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Gradiation from '../../../components/ui/gradiation'
import {SectitonWrap, GradiationRow, SectionTitleWrap, StepWrap} from './gradiation-area.style'

const GradiationArea = ({titleStyle, subtitleStyle}) => {
    const gradiationData = useStaticQuery(graphql `
        query ServicesGradiationQuery {
            servicesJson(id: {eq: "services-gradiation-content"}) {
                title
                subtitle
                gradiations {
                    id
                    title
                    desc
                    path
                }
            }
        }
    `);
    const {title, subtitle, gradiations} = gradiationData.servicesJson;
    return (
        <SectitonWrap>
            <Container>
                <Row>
                    <Col md={6}>
                        <SectionTitleWrap>
                            {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                            {title && <Heading {...titleStyle}>{parse(title)}</Heading>}
                        </SectionTitleWrap>
                    </Col>
                    <Col md={6}>
                        <StepWrap>
                            <h3><mark>{`0${gradiations.length}`}</mark>Steps</h3>
                        </StepWrap>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <GradiationRow>
                            {gradiations.map((gradiation, i) => (
                                <Gradiation
                                    key={gradiation.id}
                                    number={i + 1}
                                    isLast={i === gradiations.length - 1}
                                    title={gradiation.title}
                                    desc={gradiation.desc}
                                    path={gradiation.path}
                                />
                            ))}
                        </GradiationRow>
                    </Col>
                </Row>
            </Container>
        </SectitonWrap>
    )
}

GradiationArea.defaultProps = {
    titleStyle: {
        as: "h4",
        child: {
            color: 'primary'
        }
    },
    subtitleStyle: {
        as:"h6",
        color: "#333",
        fontSize: '14px',
        letterspacing: '3px',
        texttransform: 'uppercase',
        lineHeight: 1.43,
        mt: '-5px',
        mb: '20px'
    }
}

export default GradiationArea
