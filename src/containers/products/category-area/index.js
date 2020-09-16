import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import CategoryBox from '../../../components/box-large-image/layout-two'
import { SectionWrap } from './category-area.style'

const CategoryArea = ({
    category,
    sectionStyle,
    sectionTitleStyle,
    bottomBoxStyle,
    bottomTextStyle,
    bottoTextLinkStyle,
    categoryStyles }) => {
    const categoryData = useStaticQuery(graphql`
        query ProductCategoryQueryData {
            allWoodCategoriesJson {
                edges {
                    node {
                        id
                        title
                        description
                        categories {
                            id
                            title
                            desc
                            path
                            image{
                                childImageSharp {
                                    fluid(maxWidth: 600, maxHeight: 400, quality: 100){
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
            }
            allGasCategoriesJson {
                edges {
                    node {
                        id
                        title
                        description
                        categories {
                            id
                            title
                            desc
                            path
                            image{
                                childImageSharp {
                                    fluid(maxWidth: 600, maxHeight: 400, quality: 100){
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
            }
            allElectricCategoriesJson {
                edges {
                    node {
                        id
                        title
                        description
                        categories {
                            id
                            title
                            desc
                            path
                            image{
                                childImageSharp {
                                    fluid(maxWidth: 600, maxHeight: 400, quality: 100){
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
            }
            allOutdoorCategoriesJson {
                edges {
                    node {
                        id
                        title
                        description
                        categories {
                            id
                            title
                            desc
                            path
                            image{
                                childImageSharp {
                                    fluid(maxWidth: 600, maxHeight: 400, quality: 100){
                                        ...GatsbyImageSharpFluid
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
    `);

    let productCategories = {}
    switch (category) {
        case 'wood': {
            productCategories = categoryData.allWoodCategoriesJson.edges[0].node;
            break;
        }
        case 'gas': {
            productCategories = categoryData.allGasCategoriesJson.edges[0].node;
            break;
        }
        case 'electric': {
            productCategories = categoryData.allElectricCategoriesJson.edges[0].node;
            break;
        }
        case 'outdoor': {
            productCategories = categoryData.allOutdoorCategoriesJson.edges[0].node;
            break;
        }
        default: {
            // tbd
            break;
        }
    }
    
    return (
        <SectionWrap>
            <Container>
                <Row> 
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={productCategories.title}
                            subtitle={productCategories.subtitle}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {productCategories.categories.map((category, index) => (
                        <Col lg={4} md={6} className="box-item" key={`${index}-${category.id}`}>
                            <CategoryBox
                                {...categoryStyles}
                                imageSrc={category.image.childImageSharp}
                                title={category.title}
                                desc={category.desc}
                                path={category.path}
                                btnText="View selection"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    )
}

CategoryArea.propTypes = {
    sectionStyle: PropTypes.object,
    sectionTitleStyle: PropTypes.object,
    bottomTextStyle: PropTypes.object,
    bottoTextLinkStyle: PropTypes.object
}

CategoryArea.defaultProps = {
    sectionTitleStyle: {
        mb: '40px',
        responsive: {
            small: {
                mb: '27px'
            }
        }
    },
    bottomTextStyle: {
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333',
        mt: '60px',
        align: 'center',
        responsive: {
            small: {
                mt: '45px'
            }
        }
    },
    bottoTextLinkStyle: {
        fontWeight: 500,
        layout: 'underline',
        hover: {
            layout: 2
        }
    },
    categoryStyles: {
        boxStyle: {
            mt: '20px',
            mb: '35px'
            // ml: '15px',
            // mr: '15px'
        },
        contentBoxStyle: {
            pt: '25px',
            pl: '26px',
            pr: '26px',
            textalign: 'left'
        },
        headingStyle: {
            as: 'h6',
            fontweight: 600,
            mb: '2px'
        },
        descStyle: {
            mb: 0,
            mt: '13px'
        }
    }
}

export default CategoryArea;