import Map from './components/Map';
import { useState, useEffect } from 'react';

function App() {
  const [eventData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFires = async () => {
    setLoading(true);
    const data = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
    const { events } = await data.json();

    setEventsData(events);
    setLoading(false);
  };

  useEffect(() => {
    fetchFires();
  }, []);

  return (
    <div className='map'>{loading ? null : <Map eventData={eventData} />}</div>
  );
}

export default App;
