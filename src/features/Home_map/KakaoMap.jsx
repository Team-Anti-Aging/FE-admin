import { Map, Polyline, MapMarker } from 'react-kakao-maps-sdk';
import { useRouteStore } from '../../store/useRouteStore';
import { useModeStore } from '../../store/useModeStore';
import { usePanelStore } from '../../store/usePanelStore';
import styled from 'styled-components';
import SidePanel from '../../views/SidePanel';
import FeedbackToggle from '../../components/FeedbackToggle';
import issueImg from '../../assets/img/red.png';
import suggestionImg from '../../assets/img/blue.svg';
import { useFeedbackStore } from '../../store/useFeedbackStore';

const StyledMap = styled(Map)`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const KakaoMap = () => {
  const { trailName, routes, feedbacks } = useRouteStore();
  const { mode } = useModeStore();
  const { pushFeedback } = usePanelStore();
  const { setFeedback } = useFeedbackStore();
  const img = mode === '불편' ? issueImg : suggestionImg;

  return (
    <StyledMap center={{ lat: 37.591829, lng: 127.045189 }} level={5} style={{ width: '100%', height: '100%' }}>
      <Polyline path={routes} strokeWeight={8} strokeColor={'red'} strokeStyle={'solid'} />
      {feedbacks
        .filter((f) => f.walktrail === trailName && f.type === mode)
        .map((f) => (
          <MapMarker
            key={f.id}
            position={{ lat: f.latitude, lng: f.longitude }}
            clickable
            image={{
              src: img,
              size: { width: 20, height: 20 },
              options: { offset: { x: 10, y: 10 } },
            }}
            onClick={() => {
              pushFeedback();
              setFeedback(f);
            }}
          />
        ))}
      <FeedbackToggle />
      <SidePanel />
    </StyledMap>
  );
};

export default KakaoMap;
