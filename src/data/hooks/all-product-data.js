import { useStaticQuery, graphql } from "gatsby"

export const ProdQuery = () => {
    const { allWordpressWpProducts } = useStaticQuery(graphql `
        query ProductInfoQuery {
            allWordpressWpProducts(sort: {fields: [ acf___brand___post_title, acf___name ]}) {
                edges {
                    node {
                        id
                        slug
                        title
                        acf {
                            name
                            description
                            type {
                                post_title
                            }
                            brand {
                                post_title
                            }
                            fuel
                            size
                            models
                            output
                            brochure_url
                            manual_url
                            img1{
                                localFile{
                                    childImageSharp {
                                        fluid(maxWidth: 1500, quality: 90){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                            img2{
                                localFile{
                                    childImageSharp {
                                        fluid(maxWidth: 1500, quality: 90){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                            img3{
                                localFile{
                                    childImageSharp {
                                        fluid(maxWidth: 1500, quality: 90){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                totalCount
            }
        }      
    `)
    return allWordpressWpProducts
}