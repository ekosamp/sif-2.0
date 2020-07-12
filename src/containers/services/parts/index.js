import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import {SectionWrap, ListGroupWrap} from './section.style'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Image from '../../../components/image'
import PartsForm from '../../../components/forms/parts-form'

const PartsFormArea = ({HeadingStyle}) => {
    const PartsQueryData = useStaticQuery(graphql `
        query PartsQuery {
            servicesJson(id: {eq: "services-parts"}) {
                title
                form_message
                img{
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                parts_img1{
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                parts_img2{
                    childImageSharp {
                        fluid(maxWidth: 600, quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);

    const secdata = PartsQueryData.servicesJson;

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        <Heading {...HeadingStyle}>{secdata.title}</Heading>
                        <Text className="upper-section">{secdata.form_message}</Text>
                        <PartsForm/>
                    </Col>
                    <Col sm={0} md={4}>
                        <Image fluid={secdata.img.childImageSharp}></Image>
                        {/* <Image fluid={secdata.parts_img1.childImageSharp}></Image> */}
                        <Image fluid={secdata.parts_img2.childImageSharp}></Image>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

PartsFormArea.propTypes = {
    HeadingStyle: PropTypes.object   
}

PartsFormArea.defaultProps = {
    HeadingStyle: {
        as: 'h5',
        mb: '30px'
    }
}


export default PartsFormArea;