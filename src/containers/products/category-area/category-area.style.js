import styled from 'styled-components'
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    padding-top: 40px;
    padding-bottom: 100px;
    background-position: bottom left;
    background-size: auto;
    @media ${device.medium}{
        padding-top: '80px';
        padding-bottom: '80px';
    }
    @media ${device.small}{
        padding-top: '60px';
        padding-bottom: '60px';
    }
    .box-item{
        @media ${device.medium}{
            margin-bottom: 48px;
        }
    }
`;