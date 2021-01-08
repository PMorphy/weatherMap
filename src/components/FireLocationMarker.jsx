import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/fire';

const FireLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='fire-location-marker' onClick={onClick}>
      <Icon icon={LocationIcon} className='location-icon' />
    </div>
  );
};

export default FireLocationMarker;
