import styled from 'styled-components';
import Notification from '../../components/NotificationComponent';
import WalkwayComponent from '../../components/WalkwayComponent';
import logo from '../../assets/img/logo.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  flex: 1;
  background-color: var(--mainBeige);
  display: flex;
  align-items: center;
  gap: 5vw;
  font-size: 2rem;
  font-weight: bold;
`;
const Img = styled.img`
  height: 10vh;
`;

const WalkwayWrapper = styled.div`
  padding: 1rem;
  flex: 3;
  overflow-y: auto; // 높이 초과하면 스크롤
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start; // 스크롤 짤림 현상 방지
  border-bottom: solid var(--grey);
`;
const NotificationWrapper = styled.div`
  padding: 1rem;
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start; // 스크롤 되었을 때 밀림 현상 해결
  overflow-y: auto; // 스크롤
`;

const NotificationView = () => {
  return (
    <Container>
      <TitleWrapper>
        <Img src={logo} />
        최근 신고 내역
      </TitleWrapper>
      <WalkwayWrapper>
        <WalkwayComponent />
        <WalkwayComponent />
        <WalkwayComponent />
        <WalkwayComponent />
        <WalkwayComponent />
        <WalkwayComponent />
        <WalkwayComponent />
      </WalkwayWrapper>
      <NotificationWrapper>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </NotificationWrapper>
    </Container>
  );
};

export default NotificationView;
