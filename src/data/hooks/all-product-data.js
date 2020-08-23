import { useStaticQuery, graphql } from "gatsby";

export const ProdQuery = () => {
  const { allWpProduct } = useStaticQuery(graphql`
    query ProductInfoQuery {
      allWpProduct {
        edges {
          node {
            id
            name {
              name
            }
            Brand {
              brand {
                ... on WpBrand {
                  title
                }
              }
            }
            active {
              active
            }
            description {
              description
            }
            productBrochure {
              brochureUrl
            }
            productFuel {
              fuel
            }
            productManual {
              manualUrl
            }
            productModels {
              models
            }
            productOutput {
              output
            }
            productSize {
              size
            }
            productType {
              type {
                ... on WpProduct_type {
                  title
                }
              }
            }
            productimage1 {
              img1 {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 90){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            productimage2 {
              img2 {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 90){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            productimage3 {
              img3 {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, quality: 90){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            title
          }
        }
        totalCount
      }
    }
  `);
  return allWpProduct;
};
