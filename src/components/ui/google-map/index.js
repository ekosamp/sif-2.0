import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../../assets/images/icons/map-marker.png'
import { GooglMapWrap } from './style'

const GoogleMap = (props) => {
    const { center, APIKey, zoom, ...restProps } = props
    return (
        <GooglMapWrap {...restProps}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: APIKey }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <div className="marker">
                    <img src={MapMarker} alt="Map Marker" />
                </div>
            </GoogleMapReact>
        </GooglMapWrap>
    );
}

GoogleMap.defaultProps = {
    center: {
        lat: 48.7688142,
        lng: -123.7032967
    },
    APIKey: process.env.GATSBY_GOOGLE_API_KEY,
    zoom: 11
}

export default GoogleMap;