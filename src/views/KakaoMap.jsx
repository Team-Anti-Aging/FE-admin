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
import { getFeedbackDetail } from '../apis/api/feedback';

const StyledMap = styled(Map)`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const KakaoMap = () => {
  const { routes } = useRouteStore();
  const { feedbacks, setFeedbackDetail, categoryFeedbacks } = useFeedbackStore();
  const { openPanel } = usePanelStore();

  //피드백 디테일 업데이트 핸들러
  const handleFeedbackDetail = async (id) => {
    try {
      const res = await getFeedbackDetail(id);
      setFeedbackDetail(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StyledMap center={{ lat: 37.591829, lng: 127.045189 }} level={5} style={{ width: '100%', height: '100%' }}>
      <Polyline path={routes} strokeWeight={8} strokeColor={'red'} strokeStyle={'solid'} />
      {(categoryFeedbacks.length === 0 ? feedbacks : categoryFeedbacks)?.map((f) => (
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
            handleFeedbackDetail(f.id);
          }}
        />
      ))}

      <SideNav />
      <Panel />
    </StyledMap>
  );
};

export default KakaoMap;
