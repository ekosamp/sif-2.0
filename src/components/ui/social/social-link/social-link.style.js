import styled, {css} from 'styled-components';

export const SocialLinkWrap = styled.a `
    color: ${props => props.theme.colors.textColor};
    position: relative;
    display: inline-block;

    ${props => props.label && css `
        &:after,
        &:before{
            position: absolute;
            z-index: 1000000;
            pointer-events: none;
            bottom: 100%;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease,visibility 0.3s ease,transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24),-webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
        }
        &:after{
            background: #086AD8;
            content: attr(aria-label);
            color: white;
            min-height: 30px;
            padding: 0 10px;
            line-height: 30px;
            font-size: 14px;
            white-space: nowrap;
            border-radius: 5px;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 4px 4px 8px rgba(0,0,0,0.3);
        }
        &:before{
            content: '';
            background: transparent;
            border: 7px solid transparent;
            z-index: 1000001;   
            border-top-color: #086AD8;
            margin-bottom: -13px;
            left: calc(50% - 7px);         
        }
        &:hover{
            &:before,
            &:after{
                visibility: visible;
                opacity: 1;
            }
            &:before{
                transform: translateY(-8px);
            }
            &:after{
                transform: translateX(-50%) translateY(-8px);
            }
        }
    `}
`;
