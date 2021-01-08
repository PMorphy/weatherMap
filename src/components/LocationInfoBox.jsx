const LocationInfoBox = ({ info }) => {
  return (
    <div className='location-info'>
      <h2 className='location-info-heading'>Event Location Info</h2>

      <ul>
        <li>
          <p>Date: {Date(info.date)}</p>
        </li>
        <li>
          <strong className='location-info-id'>ID: {info.id}</strong>
        </li>
        <li>
          <strong className='location-info-title'>TITLE: {info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
