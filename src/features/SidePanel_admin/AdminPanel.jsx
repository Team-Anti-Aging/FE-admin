import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

//관리자 패널 섹션
import InfoSection from './info_section/InfoSection';
import NoticeSection from './notice_section/NoticeSection';

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

const AdminPanel = () => {
  return (
    <Container>
      <TitleWrapper>
        <Img src={logo} />
        최근 신고 내역
      </TitleWrapper>
      <InfoSection />
      <NoticeSection />
    </Container>
  );
};

export default AdminPanel;
