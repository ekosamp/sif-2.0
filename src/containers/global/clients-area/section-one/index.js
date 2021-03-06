import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Section, {Row, Col, Box} from '../../../../components/ui/wrapper'
import ClientLogo from '../../../../components/ui/client-logo'
import SwiperSlider from '../../../../components/ui/swiper'

const ClientsArea = (props) => {
    const partnersQueryData = useStaticQuery(graphql `
        query AboutPartnersDataQuery {
            allWpBrand {
                edges {
                    node {
                        id
                        path {
                            path
                        }
                        img {
                            img {
                                localFile {
                                    childImageSharp {
                                        fluid(quality: 60) {
                                            ...GatsbyImageSharpFluid
                                            presentationWidth
                                            presentationHeight
                                            aspectRatio
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `); 
    const partnersData = partnersQueryData.allWpBrand.edges;
    const {sectionStyle, slider, sliderStyle, clientLogoWrap} = props
    return (
        <Section {...sectionStyle}>
            <Row>
                <Col lg={12}>
                    <SwiperSlider settings={slider} {...sliderStyle}>
                        {partnersData.map((data, i) => {
                            return(
                                <Box key={data.node.id} {...clientLogoWrap}>
                                    <ClientLogo
                                        layout={1}
                                        title={data.node.id}
                                        path={data.node.path.path}
                                        brandImage={data.node.img.img.localFile.childImageSharp}
                                        hoverImage={data.node.img.img.localFile.childImageSharp}
                                    />
                                </Box>
                            )
                        })}
                    </SwiperSlider>
                </Col>
            </Row>
        </Section>
    )
}

ClientsArea.propTypes = {
    sectionStyle: PropTypes.object,
    slider: PropTypes.object,
    sliderStyle: PropTypes.object
}

ClientsArea.defaultProps = {
    sectionStyle: {
        pt: '60px',
        pb: '60px'
    },
    slider: {
        slidesPerView: 6,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2500
        },
        breakpoints: {
            320: {
                slidesPerView : 2
            },
            575:{
                slidesPerView : 3
            },
            767:{
                slidesPerView : 4
            },
            991:{
                slidesPerView : 5
            },            
            1499:{
                slidesPerView : 6
            }
        }
    },
    sliderStyle: {
        align: 'center'
    },
    clientLogoWrap: {
        alignself: 'center',
        textalign: 'center',
        position: 'relative'
    }
}

export default ClientsArea;