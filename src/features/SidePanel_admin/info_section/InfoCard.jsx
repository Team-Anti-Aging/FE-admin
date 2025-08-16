import styled from 'styled-components';
import { useRouteStore } from '../../../store/useRouteStore';
import { useMap } from 'react-kakao-maps-sdk';

const Container = styled.div`
  height: 8vh;
  border-bottom: 2px solid black;
  width: 90%;
  flex-shrink: 0; // flex box에서 자식요소의 크기를 맞추는 것을 막기 위해서 사용. (overflow작동)
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WalkwayName = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: var(--white);
`;
const Text = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const InfoCard = ({ info }) => {
  const { name, unresolved_count } = info;
  const { setTrailName, setRoutes } = useRouteStore();
  const map = useMap();

  //선택된 산책로 상태 변경
  const handleTrailName = () => {
    setTrailName(name);
  };

  // 경로 상태 업데이트 + 지도 범위 변경 + 마커 정보 변경
  const handleRoutes = async (name) => {
    //경로 업데이트
    // // 지도 범위 변경
    // let bounds = new window.kakao.maps.LatLngBounds();
    // routes.forEach((point) => {
    //   bounds.extend(new window.kakao.maps.LatLng(point.lat, point.lng));
    // });
    // map.setBounds(bounds);
  };

  return (
    <Container>
      <WalkwayName
        onClick={() => {
          handleTrailName();
          handleRoutes(name);
        }}>
        {name}
      </WalkwayName>
      <Text>미처리 알림 {unresolved_count}건</Text>
    </Container>
  );
};

export default InfoCard;
