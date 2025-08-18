import styled from 'styled-components';

//컴포넌트
import NoticeCard from './NoticeCard';

const Container = styled.div`
  width: 95%;
  height: 24rem;
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
  return (
    <Container>
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
    </Container>
  );
};

export default NoticeDetail;
