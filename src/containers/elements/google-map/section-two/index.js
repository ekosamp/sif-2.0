import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import GoogleMap from '../../../../components/ui/google-map'
import { SectionWrap } from './style'

const GoogleMapSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <GoogleMap />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default GoogleMapSection
