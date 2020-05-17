import { keyframes } from 'styled-components';
 
export const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0)
    }
    to {
        opacity: 1;
        transform: translateZ(0)
    }
`;

export const boxImageAnimationSignal = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    1% {
        opacity: .14;
    }
    20% {
        opacity: .3;
    }
    40% {
        opacity: .4;
    }
    60% {
        transform: scale(1);
        opacity: 0;
    }
`;

export const animateUpDown = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-25px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const zoomBig = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
        border-width: 3px;
    }
    40% {
        opacity: .5;
        border-width: 2px;
    }
    65% {
        border-width: 1px;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
        border-width: 1px;
    }
`;

export const gradationMask = keyframes `
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
        border-color: transparent;
    }
`;