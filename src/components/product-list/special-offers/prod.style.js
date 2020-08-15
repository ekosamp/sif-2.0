import styled, {css} from 'styled-components'
import Heading from '../../ui/heading'
import {device} from '../../../theme'

export const ProdMedia = styled.div `
    a{
        display: inline;
    }
    margin-bottom: 20px;
    transition: ${props => props.theme.transition};
`;

export const ProdThumb = styled.figure `
    img{
        width: 100%;
        border-radius: 5px;
        transition: all .3s;
    }
`;

export const ProdInfo = styled.div ``;

export const ProdHeader = styled.header ``;

export const ProdTitle = styled(Heading) `
    font-size: 19px;
    line-height: 1.5;
    margin-bottom: 0;
    p{
        color: inherit;
        font-size: inherit;
    }
`;

export const ProdExcerpt = styled.div `
    margin-top: 10px;
`;

export const LinkBtn = styled.div `
    margin-top: 13px;
`;

export const ProdWrapper = styled.div `
    transition: ${props => props.theme.transition};
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css `
        ${props => props.responsive.small && css `
            @media ${device.small}{
                margin-bottom: ${props => props.responsive.small.mb};
            } 
        `}
    `}
    &:hover{
        transform: translateY(-5px);
    }
`;

export const TagsWrap = styled.div `
    margin-bottom: ${props => props.mb};
    margin-top: 8px;
    p{
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${props => props.theme.colors.secondary};
        text-transform: uppercase;
    }
`;