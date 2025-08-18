import styled from 'styled-components';
import { useEffect } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

//스토어
import { useLoginStore } from '../store/useLoginStore';
import { usePanelStore } from '../store/usePanelStore';
import { useTrailNameStore } from '../store/useTrailNameStore';
import { useRouteStore } from '../store/useRouteStore';
import { useFeedbackStore } from '../store/useFeedbackStore';

//쿼리
import { useQuery } from '@tanstack/react-query';

//api
import { getWalkTrailsInfo } from '../apis/api/walktrails';
import { removeCookie } from '../apis/utils/cookie';
import { getRoute } from '../apis/api/walktrails';
import { getFeedbacks } from '../apis/api/feedback';
import { getNotices } from '../apis/api/notice';

const Header = styled.div`
  height: 17.6rem;
  border-bottom: solid;
`;
const Title = styled.div`
  height: 5rem;
  background-color: var(--mainBeige);
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const LogoutBtn = styled.button`
  width: 5rem;
  background-color: var(--mainGreen);
  color: var(--white);
  font-size: 1rem;
  border-radius: 15px;
  height: 2rem;
`;
const WalkTrailNav = styled.div`
  height: 12.5rem;
  box-sizing: border-box; // 크기 고정
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개 */
  gap: 12px;
  overflow-y: auto; /* 3줄 이상이면 스크롤 */
  background: var(--white);
`;
const WalkTrailBtn = styled.button`
  height: 5rem;
  border-radius: 15px;
  background: ${({ $selected }) => ($selected ? 'var(--mainBeige)' : 'var(--white)')};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    background: var(--mainBeige);
  }
`;

const PanelHeader = () => {
  const { setLogout } = useLoginStore();
  const { PanelType } = usePanelStore();
  const { setTrailName, trailName } = useTrailNameStore();
  const { setRoutes } = useRouteStore();
  const { setFeedback } = useFeedbackStore();
  const map = useMap();

  const { data: walktrails = [] } = useQuery({
    queryKey: ['walktrails'],
    queryFn: getWalkTrailsInfo,
    staleTime: 60 * 60 * 1000, // 1시간 동안 신선 (불필요 재요청 방지)
    gcTime: 60 * 60 * 1000, // 1시간 캐시 유지
    refetchOnWindowFocus: false, // 포커스 시 자동 리패치 X
    refetchOnReconnect: false, // 리패치 시 자동 리패치 X
    refetchOnMount: false, // 마운트 시 자동 리패치 X
    retry: 1, // 가벼운 재시도만
  });

  // 패널 이동할 때마다 초기화
  useEffect(() => {
    setTrailName(null);
  }, [PanelType, setTrailName]);

  // 경로 + 범위
  const handleRoutes = async (trailName) => {
    const routes = await getRoute(trailName);
    setRoutes(routes);

    let bounds = new window.kakao.maps.LatLngBounds();
    routes.forEach((p) => {
      bounds.extend(new window.kakao.maps.LatLng(p.lat, p.lng));
    });
    map.setBounds(bounds);
  };

  //산책로 현황 패널일 때
  const handleFeedbacks = async (trailName) => {
    const data = await getFeedbacks(trailName);
    setFeedback(data);
  };
  //금일 신고 내역 패널일 때
  const handleNotice = async (trailName) => {
    //TODO 명세서 뚫리고 체크 필요
    // const data = await getNotices(trailName);
    // setFeedback(data);
  };

  return (
    <Header>
      <Title>
        {PanelType}
        <LogoutBtn
          onClick={() => {
            setLogout();
            removeCookie('accessToken');
          }}>
          로그아웃
        </LogoutBtn>
      </Title>
      <WalkTrailNav>
        {walktrails.map((trail, idx) => (
          <WalkTrailBtn
            key={idx}
            onClick={() => {
              setTrailName(trail.name);
              handleRoutes(trail.name); // trailName바로 못 씀.
              if (PanelType === '산책로 현황') handleFeedbacks(trail.name); // 산책로 현황일 때만 모든 피드백
              if (PanelType === '금일 신고 내역') handleNotice(trail.name); // 금일 신고 내역에 해당하는 피드백
            }}
            $selected={trailName === trail.name}>
            {trail.name}
          </WalkTrailBtn>
        ))}
      </WalkTrailNav>
    </Header>
  );
};

export default PanelHeader;
