import styled from 'styled-components';
import posImg from '../../assets/img/position.png';
import redIcon from '../../assets/img/red.png';
import blueIcon from '../../assets/img/blue.svg';

const Container = styled.button`
  width: 90%;
  height: 3rem;
  border: 2px solid var(--mainRed);
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  flex-shrink: 0;
  background-color: var(--white);
  &:hover {
    background-color: var(--mainBeige);
  }
`;

const NotificationWrapper = styled.div`
  align-content: center;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const NotificationImg = styled.img`
  width: 2rem;
`;
const Keyword = styled.span`
  font-size: 1rem;
`;
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
  font-size: 1rem;
`;
const PositionImg = styled.img`
  width: 1rem;
`;
const Info = styled.span`
  color: var(--grey);
  font-size: 0.8rem;
`;

const NoticeCard = (props) => {
  return (
    <Container>
      <NotificationWrapper>
        <NotificationImg src={redIcon} />
        <Keyword>시설물 고장</Keyword>
      </NotificationWrapper>
      <MarkerInfoWrapper>
        <WalkwayName>메봉두메길</WalkwayName>
        <PositionImg src={posImg} />
        <Info>회기역 2번 출구</Info>
        <Info>25.07.23</Info>
      </MarkerInfoWrapper>
    </Container>
  );
};

export default NoticeCard;
