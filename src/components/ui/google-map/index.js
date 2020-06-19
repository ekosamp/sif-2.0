import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../../assets/images/icons/map-marker.png'
import { GooglMapWrap } from './style'

const GoogleMap = (props) => {
    const { center, APIKey, zoom, googleMapApi, ...restProps } = props
    return (
        <GooglMapWrap {...restProps}>
            {/* <GoogleMapReact
                bootstrapURLKeys={{ key: APIKey }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals={googleMapApi}
            >
                <div className="marker">
                    <img src={MapMarker} alt="Map Marker" />
                </div>
            </GoogleMapReact> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10518.74015032928!2d-123.70986813957113!3d48.768810782876535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f45f0de7a9fd3%3A0x27b09ca2abe3587!2sSouth%20Island%20Fireplace%20%26%20Spas%20Ltd.!5e0!3m2!1sen!2sca!4v1592373134708!5m2!1sen!2sca"
                width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </GooglMapWrap>
    );
}

GoogleMap.defaultProps = {
    center: {
        lat: 48.7688142,
        lng: -123.7032967
    },
    APIKey: process.env.GATSBY_GOOGLE_API_KEY,
    zoom: 11,
    googleMapApi: true
}

export default GoogleMap;