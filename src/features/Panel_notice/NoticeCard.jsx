import styled from 'styled-components';
import redIcon from '../../assets/img/red.png';
import blueIcon from '../../assets/img/blue.svg';

//스토어
import { useFeedbackStore } from '../../store/useFeedbackStore';

const Container = styled.button`
  width: 95%;
  height: 3rem;
  border: 2px solid var(--mainRed);
  border-radius: 12px;
  display: flex;
  flex-shrink: 0;
  background-color: ${({ $selected }) => ($selected ? 'var(--mainBeige)' : 'var(--white)')};
  justify-content: first baseline;
  &:hover {
    background-color: var(--mainBeige);
  }
`;

const NotificationWrapper = styled.div`
  align-content: center;
  width: 30%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0.6rem;
`;
const NotificationImg = styled.img`
  width: 2rem;
`;
const Keyword = styled.span`
  font-size: 0.8rem;
`;
const MarkerInfoWrapper = styled.div`
  width: 70%;
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 0.3rem;
`;
const WalkwayName = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
`;

const Info = styled.span`
  color: var(--grey);
  font-size: 0.8rem;
  font-weight: ${({ $time }) => ($time ? 'bold' : '')};
`;

const NoticeCard = ({ feedback }) => {
  const { setNoticeFeedbacks, noticeFeedbacks } = useFeedbackStore();

  return (
    <Container
      $selected={noticeFeedbacks[0]?.id === feedback.id}
      onClick={() => {
        setNoticeFeedbacks([feedback]);
      }}>
      <NotificationWrapper>
        <NotificationImg src={feedback.type === '불편' ? redIcon : blueIcon} />
        <Keyword>{feedback.category}</Keyword>
      </NotificationWrapper>
      <MarkerInfoWrapper>
        <WalkwayName>{feedback.walktrail}</WalkwayName>
        <Info>{feedback.location}</Info>
        <Info $time={true}>
          {feedback.created_at[0]}시 {feedback.created_at[1]}분
        </Info>
      </MarkerInfoWrapper>
    </Container>
  );
};

export default NoticeCard;
