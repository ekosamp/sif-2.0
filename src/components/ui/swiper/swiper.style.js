import styled, {css} from 'styled-components';

export const SwiperWrap = styled.div `
    ${props => props.align === 'center' && css `
        .swiper-slide{
            align-self: center;
            text-align: center;
            position: relative;
        }
    `}
    .swiper-pagination{
        position: static;
        position: static;
        display: block;
        line-height: 1;
    }
    ${props => props.pagination && css `
        .swiper-pagination{
            margin-top: ${props => props.pagination.mt};
            bottom: ${props => props.pagination.bottom};
            ${props => props.pagination.layout === "2" && css `
                .swiper-pagination-bullet{
                    &.swiper-pagination-bullet-active{
                        width: 10px;
                        height: 10px;
                    }
                }
            `}
        }
    `}
    ${props => props.opacityStyle && css `
        .swiper-slide{
            &.swiper-slide{
                &-prev,
                &-next{
                    opacity: .5;
                }
            }
        }
    `}
`;
 