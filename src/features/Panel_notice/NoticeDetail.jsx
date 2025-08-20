import styled from 'styled-components';

//컴포넌트
import NoticeCard from './NoticeCard';
//스토어
import { useFeedbackStore } from '../../store/useFeedbackStore';

const Conatiner = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1rem;
  margin-left: 2rem;
  margin-right: 3rem;
`;
const CradWrapper = styled.div`
  width: 100%;
  height: 22rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
`;

const NoticeDetail = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const { feedbacks } = useFeedbackStore();

  return (
    <Conatiner>
      <Box>
        <Title>{formattedDate}</Title>
        <Title>금일 신고 : {feedbacks.length} 개</Title>
      </Box>
      <CradWrapper>
        {feedbacks?.map((feedback) => {
          return <NoticeCard key={feedback.id} feedback={feedback} />;
        })}
      </CradWrapper>
    </Conatiner>
  );
};

export default NoticeDetail;
