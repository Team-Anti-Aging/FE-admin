import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import { getWalkTrilsService } from '../../apis/service/walktrailsService';
const KakaoMap = () => {
  const [walkTrails, setWalkTrails] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getWalkTrilsService();
      setWalkTrails(data);
    })();
  }, []);

  return (
    <Map center={{ lat: 37.591829, lng: 127.045189 }} level={5} style={{ width: '100%', height: '100%' }}>
      {walkTrails.map((walkTrail, key) => {
        return (
          <Polyline key={key} path={walkTrail.routes} strokeWeight={8} strokeColor={'red'} strokeStyle={'solid'} />
        );
      })}
    </Map>
  );
};

export default KakaoMap;
