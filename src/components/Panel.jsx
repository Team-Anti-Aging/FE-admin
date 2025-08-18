import styled from 'styled-components';

//스토어
import { usePanelStore } from '../store/usePanelStore';

//토글
import SideToggle from './SideToggle';

// 섹션
import WalktrailSection from '../features/Panel_walktrail/WalktrailSection';
import NoticeSection from '../features/Panel_notice/NoticeSection';
import AiSection from '../features/Panel_ai/AiSection';
import FeedbackPanel from '../features/Panel_feedback/FeedbackPanel';

//헤더
import PanelHeader from './PanelHeader';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 5rem;
  height: 100vh;
  background-color: var(--white);
  width: 40rem;
  z-index: 1000;
  overflow: hidden; //  부모 너비를 넘어간 자식은 보이지 않게 잘림
  display: flex;
  flex-direction: column;
`;

const Panel = () => {
  const { isOpen, PanelType } = usePanelStore();
  return (
    <>
      {isOpen && (
        <Container>
          {PanelType === 'feedback' ? (
            <FeedbackPanel />
          ) : (
            <>
              <PanelHeader />
              {PanelType === '산책로 현황' && <WalktrailSection />}
              {PanelType === '금일 신고 내역' && <NoticeSection />}
              {PanelType === 'AI 보고서' && <AiSection />}
            </>
          )}

          <SideToggle />
        </Container>
      )}
    </>
  );
};

export default Panel;
