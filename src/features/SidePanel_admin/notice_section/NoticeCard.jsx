import styled from 'styled-components';
import notification from '../../../assets/img/notification.png';
import position from '../../../assets/img/position.png';

const Container = styled.div`
  height: 8vh;
  border: 2px solid red;
  width: 90%;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  flex-shrink: 0;
`;

const NotificationWrapper = styled.div`
  align-content: center;
  width: 30%;
`;
const NotificationImg = styled.img`
  width: 3vw;
`;
const Keyword = styled.span``;
const MarkerInfoWrapper = styled.div`
  width: 60%;
  align-content: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const WalkwayName = styled.span`
  font-weight: bold;
  font-size: 1vw;
`;
const PositionImg = styled.img`
  width: 1vw;
`;
const Info = styled.span`
  color: var(--grey);
  font-size: 0.8vw;
`;

const NoticeCard = (props) => {
  return (
    <Container>
      <NotificationWrapper>
        <NotificationImg src={notification} />
        <Keyword>시설물 고장</Keyword>
      </NotificationWrapper>
      <MarkerInfoWrapper>
        <WalkwayName>메봉두메길</WalkwayName>
        <PositionImg src={position} />
        <Info>회기역 2번 출구</Info>
        <Info>25.07.23</Info>
      </MarkerInfoWrapper>
    </Container>
  );
};

export default NoticeCard;
