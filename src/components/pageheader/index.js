import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { useStaticQuery, graphql } from "gatsby"
import {PageHeaderWrap} from './page-header.style';

const PageHeader = ({pageContext, location, title}) => {
    const { breadcrumb: { crumbs } } = pageContext;
    const customCrumbLabel = location.pathname.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split('/');
    const label = crumbLabelArr[crumbLabelArr.length - 1]
    const labelArr = label.split('-');
    const imageData = useStaticQuery(graphql `
        query breadCrumbImgQuery {
            file(relativePath: {eq: "images/banner/stuv-2.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 800, quality: 60) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <PageHeaderWrap fluid={imageData.file.childImageSharp.fluid}>
            <Breadcrumb
                title={title}
                crumbs={crumbs}
                crumbLabel={labelArr.join(' ')}            
            />
        </PageHeaderWrap>
    )
}

export default PageHeader
