import styled from 'styled-components';
import UserSection from './sections/UserSection';
import AdminSection from './sections/AdminSection';
import HeaderSection from './sections/HeaderSection';

const Container = styled.div`
  height: 100vh;
  border-right: solid var(--grey);
  display: flex;
  flex-direction: column;
`;
const MainWrapper = styled.div`
  flex: 6;
  display: flex;
  justify-content: space-evenly;
`;

const FeedbackDetailView = () => {
  return (
    <Container>
      <HeaderSection />
      <MainWrapper>
        <UserSection />
        <AdminSection />
      </MainWrapper>
    </Container>
  );
};

export default FeedbackDetailView;
