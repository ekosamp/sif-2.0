import { useStaticQuery, graphql } from "gatsby";

export const SpecialsQuery = () => {
  const { allWpSpecialOffer } = useStaticQuery(graphql`
    query SpecialOfferQuery {
      allWpSpecialOffer {
        edges {
          node {
            id
            so_details {
              brand
              description
              price
              model
              modelNumber
              fuel
              image {
                localFile {
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
  `);
  return allWpSpecialOffer;
};
