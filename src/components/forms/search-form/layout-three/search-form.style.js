import styled from 'styled-components'
import {device} from '../../../../theme';

export const SearchFromWrap = styled.div `
    position: relative;
    max-width: 600px;
    width: 100%;
    padding-bottom: 20px;
    input{
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid ${props => props.theme.colors.themeColor};
        border-radius: 0;
        width: 100%;
        color: ${props => props.theme.colors.themeColor};
        font-size: 24px;
        height: 60px;
        &::placeholder,
        &::-webkit-input-placeholder {
            color: ${props => props.theme.colors.themeColor} !important;
        }
        &:-ms-input-placeholder {
            color: ${props => props.theme.colors.themeColor} !important;
        }
    }
`;

export const ButtonWrap = styled.div `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    @media ${device.xsmall}{
        right: 5px;
    }
`;