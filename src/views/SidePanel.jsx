import styled from 'styled-components';

import AdminPanel from '../features/SidePanel_admin/AdminPanel';
import FeedbackPanel from '../features/SidePanel_feedback/FeedbackPanel';
import { usePanelStore } from '../store/usePanelStore';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: var(--white);
  width: ${({ $isOpen, $panelWidth }) => ($isOpen ? $panelWidth : '0px')};
  z-index: 1000;
  transition: width 0.2s ease-in-out;
  overflow: hidden; //  부모 너비를 넘어간 자식은 보이지 않게 잘림
`;
const ToggleButton = styled.button`
  position: fixed;
  top: 41.4vh;
  left: ${({ $isOpen, $panelWidth }) => ($isOpen ? $panelWidth : '0px')};
  width: 5vh;
  height: 7rem;
  background-color: var(--white);
  border-radius: 0 20px 20px 0;
  color: var(--grey);
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;
  transition: left 0.2s ease-in-out;
  border: solid var(--grey); /* 네 방향 동일하게 */
  border-left: none;
`;

const SidePanel = () => {
  const { openType, isOpen, pushToggle } = usePanelStore();

  const panelWidth = openType === 'admin' ? '40%' : '80%';
  return (
    <>
      <ToggleButton
        $isOpen={isOpen}
        $panelWidth={panelWidth}
        onClick={() => {
          pushToggle();
        }}>
        {isOpen ? '<' : '>'}
      </ToggleButton>
      <Container $isOpen={isOpen} $panelWidth={panelWidth}>
        {openType === 'admin' ? <AdminPanel /> : <FeedbackPanel />}
      </Container>
    </>
  );
};

export default SidePanel;
