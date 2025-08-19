import styled from 'styled-components';
import UserSection from './UserSection';
import AdminSection from './AdminSection';
import HeaderSection from './HeaderSection';

//스토어
import { useFeedbackStore } from '../../store/useFeedbackStore';

const Container = styled.div`
  height: 100%;
  border-right: solid var(--grey);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
`;
const MainWrapper = styled.div`
  flex: 6;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
`;

const FeedbackDetailView = () => {
  const { feedbackDetail } = useFeedbackStore();
  return (
    <Container>
      <HeaderSection feedbackDetail={feedbackDetail} />
      <MainWrapper>
        <UserSection feedbackDetail={feedbackDetail} />
        <AdminSection key={feedbackDetail.id} />{' '}
        {/*key값이 달라질 때마다 리렌더링 되어 AdminSection의 상태가 초기화 된다.*/}
      </MainWrapper>
    </Container>
  );
};

export default FeedbackDetailView;
