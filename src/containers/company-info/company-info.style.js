import styled from 'styled-components'
import {device} from '../../theme'

export const Wrapper = styled.section `
    padding-top: 50px;
    @media ${device.medium}{
        padding-top: 40px;
    }
    @media ${device.small}{
        padding-top: 25px;
    }
`;

export const SectionTitle = styled.div `
    margin-top: 20px;
    text-align: center;
    @media ${device.medium}{
        margin-bottom: 20px;
    }
`;