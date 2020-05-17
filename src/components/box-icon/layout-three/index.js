import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {BoxIconWrap, BoxIconInner, BoxIconTop, IconWrap, Heading, BoxIconBottom, Text} from './box-icon.style'

const BoxIcon = ({icon, title, desc}) => {
    return(
        <BoxIconWrap>
            <BoxIconInner>
                <BoxIconTop>
                    {icon && (
                        <IconWrap>
                            <Img fixed={icon} alt={title}/>
                        </IconWrap>
                    )}
                    {title && <Heading>{title}</Heading>}
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
    icon: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.string,
    desc: PropTypes.string
}

export default BoxIcon;