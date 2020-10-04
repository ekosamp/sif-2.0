import styled from 'styled-components'
import {device} from '../../../../theme'

export const TestimonialWrapper = styled.section `
    margin-top: 40px;
    padding-top: 60px;
    padding-bottom: 100px;
    background-color: #F8F8F8;
    @media ${device.medium}{
        margin-top: 30px;
        padding-top: 50px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        margin-top: 30px;
        padding-top: 30px;
        padding-bottom: 60px;
    }
`;