import { Map, Polyline, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import redIcon from '../assets/img/red.png';
import blueIcon from '../assets/img/blue.svg';

//스토어
import { useRouteStore } from '../store/useRouteStore';
import { useFeedbackStore } from '../store/useFeedbackStore';
import { usePanelStore } from '../store/usePanelStore';

//컴포넌트
import SideNav from '../components/SideNav';
import Panel from '../components/Panel';

const StyledMap = styled(Map)`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const KakaoMap = () => {
  const { routes } = useRouteStore();
  const { feadbacks } = useFeedbackStore();
  const { openPanel } = usePanelStore();

  return (
    <StyledMap center={{ lat: 37.591829, lng: 127.045189 }} level={5} style={{ width: '100%', height: '100%' }}>
      <Polyline path={routes} strokeWeight={8} strokeColor={'red'} strokeStyle={'solid'} />
      {feadbacks?.map((f) => (
        <MapMarker
          key={f.id}
          position={{ lat: f.latitude, lng: f.longitude }}
          clickable
          image={{
            src: f.type === '불편' ? redIcon : blueIcon,
            size: { width: 20, height: 20 },
            options: { offset: { x: 10, y: 10 } },
          }}
          onClick={() => {
            openPanel('feedback');
          }}
        />
      ))}

      <SideNav />
      <Panel />
    </StyledMap>
  );
};

export default KakaoMap;
