import { useStaticQuery, graphql } from "gatsby"

export const ProdQuery = () => {
    const { allWordpressWpProducts } = useStaticQuery(graphql `
        query ProductInfoQuery {
            allWordpressWpProducts(sort: {fields: [ acf___brand___post_title, acf___name ]}) {
                totalCount
                edges {
                    node {
                        id
                        slug
                        title
                        acf {
                            name
                            description
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
            }
        }      
    `)
    return allWordpressWpProducts
}