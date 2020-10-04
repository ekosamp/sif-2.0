import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Container, Row, Col } from '../../components/ui/wrapper'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import { Wrapper, SectionTitle } from './company-info.style'

const CompanyInfo = (props) => {
    const { headingStyle, textStyle } = props;
    const companyData = useStaticQuery(graphql `
        query CompanyInfoQuery {
            landingJson(id: {eq: "company-info"}) {
                title
                desc1
                desc2
            }
        }    
    `);
    const {title, desc1, desc2} = companyData.landingJson;

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle>
                            <Heading {...headingStyle}>{title}</Heading>
                            <Text {...textStyle}>{desc1}</Text>
                            <Text {...textStyle}>{desc2}</Text>
                        </SectionTitle>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

CompanyInfo.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object
}

CompanyInfo.defaultProps = {
    headingStyle: {
        as: 'h3',
        child: {
            color: 'primary'
        }
    },
    textStyle: {
        fontSize: '18px',
        mt: '30px',
        align: 'center'
    }
}

export default CompanyInfo;