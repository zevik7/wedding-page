"use client"
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyC7IkwrT6gaGQRUK9xDLhJkIzS5PdIgFD0',
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapContainerRef.current) {
        new google.maps.Map(mapContainerRef.current, {
          center: { lat: 9.949759, lng: 105.658960 },
          zoom: 10,
        });
      }
    });
  }, []);

  return <div ref={mapContainerRef} className='max-w-md w-full shadow-lg h-full rounded-md overflow-hidden'/>;
};

export default GoogleMap;