import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import BoxIcon from '../../../../components/box-icon/layout-three'
// import { data } from './data'
import { SectionWrap } from './style'

const BoxIconSection = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {data.map((item, i) => (
                        <Col md={6} key={`${item.id}-${i}`}>
                            <BoxIcon
                                id={item.id}
                                title={item.title}
                                desc={item.desc}
                                path={item.path}
                                // icon={item.icon}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default BoxIconSection
