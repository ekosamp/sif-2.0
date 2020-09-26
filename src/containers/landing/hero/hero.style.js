import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'

export const HeroWrapper = styled(BackgroundImage) `
    padding-top: 0px;
    padding-bottom: 250px;
    position: relative;
    height: 800px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-position: 50% 50% !important;
    background-color: transparent;
    @media ${device.xlarge}{
        height: 780px;
    }
    @media ${device.large}{
        height: 620px;
    }
    @media ${device.medium}{
        height: auto;
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const HeroWrapperText = styled.div `
    z-index: 4;
    position: relative;
    @media ${device.medium}{
        text-align: center;
    }
`;

export const PreviewInnerImg = styled.div `
    @media ${device.medium}{
        max-width: 500px;
        margin: auto;
    }
`;