import styled from 'styled-components';
import {device} from '../../../theme'

export const SectionWrap = styled.div `
    padding-top: 40px;
    padding-bottom: 40px;
    @media ${device.medium}{
        padding-top: 40px;
        padding-bottom: 30px;
    }
    @media ${device.small}{
        padding-top: 30px;
    }
    .upper-section{
        margin-bottom: 30px;
    }
`;

export const ListGroupWrap = styled.div `
    margin-bottom: 60px;
    @media ${device.medium}{
        margin-bottom: 50px;
    }
    @media ${device.small}{
        margin-bottom: 30px;
    }
`;