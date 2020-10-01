import styled from 'styled-components'
import {device} from '../../../theme'

export const AboutWrapper = styled.section `
    padding-top: 80px;
    padding-bottom: 60px;
    @media ${device.medium}{
        padding-top: 50px;
        padding-bottom: 30px;
    }
    @media ${device.small}{
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const LeftBox = styled.div `
    @media ${device.medium}{
        margin-bottom: 20px;
    }
`;

export const RightBox = styled.div ``;