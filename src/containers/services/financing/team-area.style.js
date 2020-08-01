import styled from 'styled-components'
import {device} from '../../../theme'

export const Wrapper = styled.section `
    padding-top: 50px;
    padding-bottom: 35px;
    @media ${device.medium}{
        padding-top: 70px;
        padding-bottom: 15px;
    }
    @media ${device.small}{
        padding-top: 56px;
        padding-bottom: 25px;
    }
`;

export const SectionTitle = styled.div `
    margin-bottom: 60px;
    @media ${device.medium}{
        margin-bottom: 50px;
    }
`;

export const ButtonWrap = styled.div `
    margin-top: 30px;
`;

export const ImageWrap = styled.div`
    position: relative;
    padding-top: 100px;
    @media ${device.small}{
        padding-top: 60px;
    }
`;

export const ImageOne = styled.figure`
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 300px;
    @media ${device.large}{
        height: auto;
    }
`;