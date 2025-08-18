import styled from 'styled-components';
import { usePanelStore } from '../store/usePanelStore';

const Toggle = styled.button`
  position: fixed;
  top: 17rem;
  left: 45rem;
  width: 2rem;
  height: 7rem;
  background-color: var(--white);
  border-radius: 0 20px 20px 0;
  color: var(--grey);
  font-weight: bold;
  font-size: 1.5rem;
  z-index: 1100;
  border: solid var(--grey); /* 네 방향 동일하게 */
  border-left: none;
`;

const SideToggle = () => {
  const { closePanel } = usePanelStore();
  return (
    <Toggle
      onClick={() => {
        closePanel();
      }}>
      {'<'}
    </Toggle>
  );
};

export default SideToggle;
