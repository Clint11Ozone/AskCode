import { GoogleMap, useJsApiLoader, Marker, } from '@react-google-maps/api';
import { Autocomplete } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from "react";

const containerStyle = {
    width: '338px',
    height: '316px',
    borderRadius: '19.76px',
    backgroundColor: '#fff'
};

const center = {
    lat: 6.7707568,
    lng: 3.3073322
};


const Map = ({ position=center }) => {

    console.log(position);

    const [marker, setmarker] = useState(center);

    useEffect(() => {
      setmarker(position)
    }, [position])
    

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD9_8m53X6Ok26JQD31zkyVIg7Mf8_doow"
    })

    const [map, setMap] = useState(null)


    const [selectedAddress, setSelectedAddress] = useState(null);


    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (

        <div className="">
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={marker}
                        zoom={9}
                        onLoad={onLoad}
                        onUnmount={onUnmount}

                    >

                        <Marker
                            // key="marker_1"
                            position={marker}

                        />
                        
                        
                        <></>
                    </GoogleMap>
                ) : <></>
            }

        </div>
    )
}

export default Map