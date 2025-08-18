import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import ai from '../assets/img/ai.png';
import notice from '../assets/img/notice.png';
import dong from '../assets/img/dong.png';

// 스토어
import { usePanelStore } from '../store/usePanelStore';
import { useTrailNameStore } from '../store/useTrailNameStore';
import { useRouteStore } from '../store/useRouteStore';
import { useFeedbackStore } from '../store/useFeedbackStore';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 5rem;
  background-color: var(--white);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: ${({ $title }) => ($title ? '5rem' : '3rem')};
`;

const Box = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $active }) => ($active ? 'var(--mainBeige)' : 'var(--white)')};
`;

const Text = styled.span`
  color: var(--mainGreen);
  font-size: 0.8rem;
  white-space: nowrap; //줄바꿈 방지
`;

const SideNav = () => {
  const { openPanel, PanelType } = usePanelStore();
  const { setTrailName } = useTrailNameStore();
  const { setRoutes } = useRouteStore();
  const { setFeedback } = useFeedbackStore();

  return (
    <Container>
      <Img src={logo} $title />
      <Box
        $active={PanelType === '산책로 현황'}
        onClick={() => {
          openPanel('산책로 현황');
          setTrailName(null);
          setRoutes([]);
          setFeedback([]);
        }}>
        <Img src={dong} />
        <Text>산책로 현황</Text>
      </Box>
      <Box
        $active={PanelType === '금일 신고 내역'}
        onClick={() => {
          openPanel('금일 신고 내역');
          setTrailName(null);
          setRoutes([]);
          setFeedback([]);
        }}>
        <Img src={notice} />
        <Text>금일 신고 내역</Text>
      </Box>
      <Box
        $active={PanelType === 'AI 보고서'}
        onClick={() => {
          openPanel('AI 보고서');
          setTrailName(null);
          setRoutes([]);
          setFeedback([]);
        }}>
        <Img src={ai} />
        <Text>AI 보고서</Text>
      </Box>
    </Container>
  );
};

export default SideNav;
