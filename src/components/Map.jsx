import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import FireLocationMarker from './FireLocationMarker';
import StormLocationMarker from './StormLocationMarker';
import LocationInfoBox from './LocationInfoBox';

const key = process.env.REACT_APP_MAP_KEY;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const fireMarkers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <FireLocationMarker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: event.id,
              title: event.title,
              date: event.geometries[0].date
            })
          }
        />
      );
    }
    return null;
  });

  const stormMarkers = eventData.map((event) => {
    if (event.categories[0].id === 10) {
      return (
        <StormLocationMarker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: event.id,
              title: event.title,
              date: event.geometries[0].date
            })
          }
        />
      );
    }
    return null;
  });
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {fireMarkers}
        {stormMarkers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 40.8021,
    lng: -124.1637
  },
  zoom: 11
};

export default Map;
