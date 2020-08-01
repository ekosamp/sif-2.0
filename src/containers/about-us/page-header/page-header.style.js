import styled from 'styled-components'
import {device} from '../../../theme'
import BackgroundImage from 'gatsby-background-image'

export const PageHeaderWrap = styled(BackgroundImage) `
    padding-top: 125px;
    padding-bottom: 125px;
    @media ${device.medium}{
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;