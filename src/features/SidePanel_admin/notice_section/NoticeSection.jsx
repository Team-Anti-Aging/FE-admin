import styled from 'styled-components';
import NoticeCard from './NoticeCard';

const Container = styled.div`
  padding: 1rem;
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start; // 스크롤 되었을 때 밀림 현상 해결
  overflow-y: auto; // 스크롤
`;

const NoticeSection = () => {
  return (
    <Container>
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
    </Container>
  );
};

export default NoticeSection;
