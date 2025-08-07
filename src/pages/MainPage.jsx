import styled from 'styled-components';

//카카오맵
import KakaoMap from '../features/Map/KakaoMap';

//토글
import FeedbackToggle from '../components/FeedbackToggle';

//패널
import SidePanel from '../features/SidePanel/SidePanel';

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const MainPage = () => {
  return (
    <MapContainer>
      <KakaoMap />
      <FeedbackToggle />
      <SidePanel />
    </MapContainer>
  );
};

export default MainPage;
