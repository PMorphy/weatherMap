import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/storm-advisory';

const StormLocationMarker = ({ onClick }) => {
  return (
    <div className='storm-location-marker' onClick={onClick}>
      <Icon icon={LocationIcon} className='location-icon' />
    </div>
  );
};

export default StormLocationMarker;
