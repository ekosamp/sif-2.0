import { useStaticQuery, graphql } from "gatsby"

export const ProdQuery = () => {
    const { allWordpressWpProducts } = useStaticQuery(graphql `
        query ProductInfoQuery {
            allWordpressWpProducts(sort: {fields: title, order: DESC}) {
                totalCount
                edges {
                    node {
                        id
                        slug
                        title
                        content
                        acf {
                            brochure_url
                            fuel
                            models
                            output
                            size
                            manual_url
                            type {
                                post_title
                            }
                            brand {
                                post_title
                            }
                            img1{
                                localFile{
                                    childImageSharp {
                                        fluid(maxWidth: 1500, quality: 100){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                            img2{
                                localFile{
                                    childImageSharp {
                                        fluid(maxWidth: 1500, quality: 100){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                            img3{
                                localFile{
                                    childImageSharp {
                                        fluid(maxWidth: 1500, quality: 100){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }      
    `)
    return allWordpressWpProducts
}