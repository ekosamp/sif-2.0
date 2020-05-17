import styled, {css} from 'styled-components';
import {SocialLinkWrap} from './social-link/social-link.style'

export const SocialWrap = styled.div `
    ${SocialLinkWrap}{
        color: ${props => props.color};
        font-size: ${props => props.fontSize};
        line-height: 1;
        margin-left: ${props => props.space/2}px;
        margin-right: ${props => props.space/2}px;
        svg{
            width: ${props => props.icon ? props.icon.width : '25px'};
            height: ${props => props.icon ? props.icon.height : '22px'};
        }
        ${props => props.shape === 'rounded' && css `
            text-align: center;
            height: 48px;
            width: 48px;
            line-height: 46px;
            border-radius: 50%;
        `}
        ${props => props.varient === 'outlined' && css `
            background: transparent;
            border-width: ${props => props.borderwidth || '1px'};
            border-style: solid;
            border-color: ${props => props.bordercolor};
        `}
        ${props => props.label_position === 'bottom-left' && css `
            &:before,
            &:after{
                top: 100%;
            }
            &:before{
                margin-top: -13px;
                margin-bottom: 0;
                bottom: auto;
                border-bottom-color: ${props => props.theme.colors.themeColor};
                border-top-color: transparent;
            }
            &:after{
                margin-left: 14px;
                left: 50%;
                transform: translateX(-100%);
            }
            &:hover{
                &:before{
                    transform: translateY(8px);
                }
                &:after{
                    transform: translateX(-100%) translateY(8px);
                }
            }
        `}
        ${props => props.label_bg && css `
            &:before{
                ${props => props.label_position === 'bottom-left' && css `
                    ${props => props.label_bg === 'black' && css `
                        border-bottom-color: ${props => props.theme.colors.black};
                        border-top-color: transparent !important;
                    `}
                    ${props => props.label_bg === 'secondary' && css `
                        border-top-color: transparent !important;
                        border-bottom-color: ${props => props.theme.colors.secondary};
                    `}
                `}
                ${props => props.label_bg === 'black' && css `
                    border-top-color: ${props => props.theme.colors.black};
                `}
                ${props => props.label_bg === 'secondary' && css `
                    border-top-color: ${props => props.theme.colors.secondary};
                `}
            }
            &:after{
                ${props => props.label_bg === 'black' && css `
                    background-color: ${props.theme.colors.black};
                `}
                ${props => props.label_bg === 'secondary' && css `
                    background-color: ${props.theme.colors.secondary};
                `}
            }
        `}
        &:hover{
            color: ${props => props => props.hoverColor || props.theme.colors.themeColor};
        }
        &:first-child{
            margin-left: 0;
        }
        &:last-child{
            margin-right: 0;
        }
    }
`;  