import styled from 'styled-components'

export const ImageThumbWrapper = styled.div `
    position: relative;
    cursor: pointer;
    .image-poster{
        position: relative;
        transition: all 1s cubic-bezier(0,0,.2,1) !important;
        img{
            width: 100%;
            border-radius: 5px;
        }
    }
    &:hover{
        .image-poster{
            transform: scale3d(1.04,1.04,1.04);
        }
    }
`;

export const ProdMiniThumbs = styled.div `
    cursor: pointer;
    .image-poster{
        position: relative;
        transition: all 1s cubic-bezier(0,0,.2,1) !important;
    }
    &:hover{
        .image-poster{
            transform: scale3d(1.04,1.04,1.04);
        }
    }
`;