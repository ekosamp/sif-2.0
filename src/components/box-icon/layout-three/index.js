import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from '../../ui/anchor'
import Image from '../../image'
import {BoxIconWrap, BoxIconInner, BoxIconTop, IconWrap, Heading, linkStyle, BoxIconBottom, Text} from './box-icon.style'

const BoxIcon = ({icon, title, desc, path}) => {
    let boxImage;
    if(icon.fixed && typeof icon.fixed !== 'function'){
        boxImage = <Img fixed={icon.fixed} alt={title}/>;
    } else if(icon.fluid){
        boxImage = <Image fluid={icon.fluid} alt={title}/>
    } else{
        boxImage = <img src={icon} alt={title}/>
    }
    return(
        <BoxIconWrap>
            <BoxIconInner>
                <BoxIconTop>
                    {icon && (
                        <IconWrap>
                            {boxImage}
                        </IconWrap>
                    )}
                    {(title && path) ? 
                        <Heading><Link {...linkStyle} path={path}>{title}</Link></Heading> :
                        <Heading>{title}</Heading>
                    }
                </BoxIconTop>
                {desc && (
                    <BoxIconBottom>
                        <Text>{desc}</Text>
                    </BoxIconBottom>
                )}
            </BoxIconInner>
        </BoxIconWrap>
    )
}


BoxIcon.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

BoxIcon.defaultProps = {
    linkStyle: {
        layout: 'underline',
        hover:{
            color: '#d2a98e !important'
        }
    }
}

export default BoxIcon;