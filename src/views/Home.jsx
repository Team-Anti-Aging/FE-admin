import styled from 'styled-components';

//카카오맵
import KakaoMap from './KakaoMap';

const MapContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const MainPage = () => {
  return (
    <MapContainer>
      <KakaoMap />
    </MapContainer>
  );
};

export default MainPage;
