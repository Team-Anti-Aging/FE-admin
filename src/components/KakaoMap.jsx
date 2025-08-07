import { Map, MapMarker } from 'react-kakao-maps-sdk';
const KakaoMap = () => {
  return <Map center={{ lat: 37.591829, lng: 127.045189 }} level={3} style={{ width: '100%', height: '100%' }}></Map>;
};

export default KakaoMap;
