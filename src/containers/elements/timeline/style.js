import styled from 'styled-components'
import { device } from '../../../theme'

export const SectionWrap = styled.div`
    padding: 80px 0 40px 0;
    @media ${device.small}{
        padding: 40px 0 20px 0;
    }
`;