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
import { getNoticesWalkTrail } from '../apis/api/notice';

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
  const { logout } = useLoginStore();
  const { PanelType } = usePanelStore();
  const { setTrailName, trailName } = useTrailNameStore();
  const { setRoutes } = useRouteStore();
  const { setFeedback, setRedData, setBlueData, setCategoryFeedbacks, setNoticeFeedbacks } = useFeedbackStore();
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
    const red = [
      { name: '안전', value: 0 },
      { name: '청결', value: 0 },
      { name: '이동성', value: 0 },
      { name: '소음-방해', value: 0 },
      { name: '기타', value: 0 },
    ];
    const blue = [
      { name: '편의시설 확충', value: 0 },
      { name: '경관 개선', value: 0 },
      { name: '정보 제공', value: 0 },
      { name: '프로그램/이벤트', value: 0 },
      { name: '기타', value: 0 },
    ];
    data.forEach((f) => {
      if (f.type === '불편') {
        red.forEach((r) => {
          if (r.name === f.category) r.value++;
        });
      } else if (f.type === '제안') {
        blue.forEach((b) => {
          if (b.name === f.category) b.value++;
        });
      }
    });
    setRedData(red);
    setBlueData(blue);
    setCategoryFeedbacks([]);
  };
  //금일 신고 내역 패널일 때
  const handleNotice = async (trailName) => {
    const data = await getNoticesWalkTrail(trailName);
    setFeedback(data);
    setNoticeFeedbacks([]);
  };

  return (
    <Header>
      <Title>
        {PanelType}
        <LogoutBtn
          onClick={() => {
            logout();
            removeCookie('accessToken');
            removeCookie('refreshToken');
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
