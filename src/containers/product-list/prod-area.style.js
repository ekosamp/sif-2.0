import styled from 'styled-components'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import {device} from '../../theme'

export const ProdWrapper = styled.div ``;

export const ProdBox = styled.div `
    padding-bottom: 25px;
    margin-bottom: 30px;
    margin-top: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    transition: all .3s;
`;

export const BrandsWrap = styled.div `
    margin-bottom: ${props => props.mb};
    margin-top: 8px;
    p{
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${props => props.theme.colors.secondary};
        text-transform: uppercase;
        display: inline;
        cursor: pointer;
    }
`;

export const BrandsLink = styled(Text) `
    color: ${props => props.theme.colors.themeColor} !important;
    font-size: 12px !important;
    padding-right: 4px;
    padding-left: 4px;
    &:hover {
        color: ${props => props.theme.colors.secondary} !important;
    }
`;

export const BrandLinksTitle = styled(Heading) `
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0;
    display: inline;
    p{
        color: inherit;
        font-size: inherit;
    }
`;

export const NoResultsText = styled(Heading) `
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    display: inline;
    h2{
        margin-top: 20px;
        color: inherit;
        font-size: inherit;
    }
`;