import React from 'react'
import {SocialLinkWrap} from './social-link.style';

export const SocialLink = ({path, children, ...props}) => {
    return <SocialLinkWrap {...props} href={path} aria-label={props.label} target="_blank" rel="noopener noreferrer">{children}</SocialLinkWrap>
}



