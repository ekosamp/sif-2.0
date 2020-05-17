import React from 'react';
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper';
import '../../../assets/css/swiper.css'
import {SwiperWrap} from './swiper.style'
 
const SwiperSlider = ({children, settings, ...props}) => {
    return (
        <SwiperWrap {...props}>
            <Swiper {...settings}>
                {children}
            </Swiper>
        </SwiperWrap>
    )
} 

SwiperSlider.propTypes = {
    children: PropTypes.node.isRequired,
    settings: PropTypes.object
}

SwiperSlider.defaultProps = {
    settings: {
        slidesPerView: 4,
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }
}

export default SwiperSlider; 