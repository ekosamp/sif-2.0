import styled, {css} from 'styled-components'
import Heading from '../../ui/heading'
import QuoteImg from '../../../assets/images/icons/quote.png'
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

export const ProdMiniThumbs = styled.div `
    margin-top: 8px;
    display: flex !important;
    img{
        width: 96%;
        border-radius: 5px;
        transition: all .3s;
    }
`;

export const ProdQuote = styled.blockquote `
    position: relative;
    padding: 45px 30px 40px;
    background: #f5f7fd;
    text-align: center;
    &:before{
        content: '';
        position: absolute;
        left: 50%;
        top: 30px;
        transform: translateX(-50%);
        height: 90px;
        width: 120px;
        background: url(${QuoteImg}) no-repeat;
        background-size: cover;
    }
    h3{
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 30px;
    }
    footer{
        font-size: 16px;
        color: #333;
        margin-bottom: 0;
    }
`;

export const ProdInfo = styled.div ``;

export const ProdHeader = styled.header ``;

export const ProdTitle = styled(Heading) `
    font-size: 24px;
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
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css `
        ${props => props.responsive.small && css `
            @media ${device.small}{
                margin-bottom: ${props => props.responsive.small.mb};
            } 
        `}
    `} 
    &:hover{
        ${ProdMedia}{
            transform: translateY(-5px);
        }
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