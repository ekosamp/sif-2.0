const path = require(`path`)
const {slugify} = require('./src/utils/utilFunctions')
const _ = require('lodash')

exports.onCreateNode = ({node, actions, getNode}) => {
    const { createNodeField } = actions;
    if(node.internal.type === 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title);
        const date = node.frontmatter.date;
        const dateSplit = date.split(" ");
        createNodeField({
            node, 
            name: 'slug',
            value: slugFromTitle
        });
        createNodeField({
            node,
            name: 'id',
            value: slugFromTitle + '-' + dateSplit[0]
        });
        createNodeField({
            node,
            name: "dateSlug",
            value: dateSplit[0]
        });
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
              node,
              name: "authorId",
              value: slugify(node.frontmatter.author)
            });
        }
    }
    if(node.internal.type === 'AuthorsJson'){
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name)
        });
    }
    if(node.internal.type === 'ItServicesJson'){
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if(node.internal.type === 'ItSolutionsJson'){
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
    if(node.internal.type === 'CaseStudiesJson'){
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title)
        })
    }
}
  

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allItServicesJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            allCaseStudiesJson{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                    next {
                        fields{
                            slug
                        }
                        id
                        title
                        image {
                            childImageSharp {
                                fixed(width: 120, height: 80, quality: 90) {
                                    src
                                    width
                                    height
                                }
                            }
                        }
                    }
                    previous{
                        fields{
                            slug
                        }
                        id
                        title
                        image {
                            childImageSharp {
                                fixed(width: 120, height: 80, quality: 90) {
                                    src
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
            }  
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            authorId
                            dateSlug
                        }
                        frontmatter {
                            tags
                            categories
                            date(formatString: "LL")
                        }
                    }
                    next {
                        frontmatter {
                            title
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 720, maxHeight: 120, quality: 90) {
                                        src
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                    previous {
                        frontmatter {
                            title
                            featured_image {
                                childImageSharp {
                                    fluid(maxWidth: 720, maxHeight: 120, quality: 90) {
                                        src
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }       
        }
    `);
}
