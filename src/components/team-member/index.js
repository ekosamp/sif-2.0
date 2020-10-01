import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Image from '../image'
import {
    TeamMemberWrap,
    TeamMemberInner,
    TeamMemberImage,
    TeamMemberInfo,
    TeamMemberName,
    TeamMemberDesignation} from './team-member.style'

const TeamMember = ({imageSrc, name, designation, social, ...restProps}) => {
    const {nameStyle, roleStyle, infoStyle, socialStyle, wrapperStyle, ...restStyles} = restProps;
    let teamImg;
    if(imageSrc.fixed){
        teamImg = <Img fixed={imageSrc.fixed} alt={name}/>;
    } else if(imageSrc.fluid){
        teamImg = <Image fluid={imageSrc.fluid} alt={name}/>;
    } else{
        teamImg = <img src={imageSrc} alt={name}/>;
    }
    return (
        <TeamMemberWrap {...wrapperStyle} {...restStyles}>
            <TeamMemberInner>
                <TeamMemberImage>
                    {teamImg}
                </TeamMemberImage>
                <TeamMemberInfo {...infoStyle}>
                    {name && <TeamMemberName {...nameStyle}>{name}</TeamMemberName>}
                    {designation && <TeamMemberDesignation {...roleStyle}>{designation}</TeamMemberDesignation>}
                </TeamMemberInfo>
            </TeamMemberInner>
        </TeamMemberWrap>
    )
}

TeamMember.propTypes = {
    imageSrc: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    name: PropTypes.string,
    designation: PropTypes.string,
    social: PropTypes.object,
    layout: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    socialStyle: PropTypes.object
}

TeamMember.defaultProps = {
    layout: 1,
    socialStyle: {
        color: '#fff',
        space: 20,
        hoverColor: '#fff',
        label_bg: 'secondary'
    }
}

export default TeamMember;