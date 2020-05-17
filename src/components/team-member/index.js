import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import Image from '../image'
import Social, {SocialLink} from '../ui/social'
import {
    TeamMemberWrap,
    TeamMemberInner,
    TeamMemberImage,
    TeamMemberSocialWrap,
    TeamMemberInfo,
    TeamMemberName,
    TeamMemberDesignation} from './team-member.style'

const TeamMember = ({imageSrc, name, designation, social, ...restProps}) => {
    const {nameStyle, roleStyle, infoStyle, socialStyle, wrapperStyle, ...restStyles} = restProps;
    const {facebook, twitter, instagram} = social;
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
                    {social && (
                        <TeamMemberSocialWrap>
                            <Social {...socialStyle}>
                                {facebook && <SocialLink label="Facebook" path={facebook}><TiSocialFacebook/></SocialLink>}
                                {twitter && <SocialLink label="Twitter" path={twitter}><TiSocialTwitter/></SocialLink>}
                                {instagram && <SocialLink label="Instagram" path={instagram}><TiSocialInstagram/></SocialLink>}
                            </Social>
                        </TeamMemberSocialWrap>
                    )}
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