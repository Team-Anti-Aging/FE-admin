import styled from 'styled-components';
import KakaoMap from '../components/KakaoMap';

const MapContainer = styled.div`
  position: relative;
  width: 100%;
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
