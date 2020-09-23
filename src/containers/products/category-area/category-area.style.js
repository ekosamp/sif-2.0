import styled from 'styled-components'
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    padding-top: 40px;
    padding-bottom: 80px;
    background-position: bottom left;
    background-size: auto;
    @media ${device.medium}{
        padding-top: 40px;
    }
    @media ${device.small}{
        padding-top: 30px;
        padding-bottom: 50px;
    }
    .box-item{
        margin-bottom: 28px;
        @media ${device.medium}{
            margin-bottom: 48px;
        }
    }
`;