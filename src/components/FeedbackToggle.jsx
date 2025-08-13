import styled from 'styled-components';
import { useModeStore } from '../store/useModeStore';
import { useState } from 'react';

const Container = styled.div`
  position: absolute;
  top: 5vh; // 원하는 위치
  left: 80vw; // 원하는 위치
  z-index: 1000;
`;
const ToggleWrapper = styled.div`
  display: flex;
  background-color: #f1f1f1;
  border-radius: 999px;
  padding: 0.5rem;
  width: 11rem;
  position: relative;
  border: solid grey;
  gap: 2rem;
  cursor: pointer;
`;

const ToggleButton = styled.button`
  flex: 1;
  border: none;
  background: none;
  z-index: 2;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--black)')};
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ $active }) => ($active ? '50%' : '0%')};
  width: 50%;
  border-radius: 999px;
  background-color: ${({ $active }) => ($active ? 'var(--mainRed)' : 'var(--mainBlue)')}; // 빨강 or 파랑
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;

const FeedbackToggle = () => {
  const { toggle } = useModeStore();
  const [isOpen, setIsOpen] = useState('false');
  return (
    <Container>
      <ToggleWrapper
        onClick={() => {
          toggle();
          setIsOpen(!isOpen);
        }}>
        <Slide $active={isOpen} />
        <ToggleButton $active={isOpen}>제안</ToggleButton>
        <ToggleButton $active={!isOpen}>불편</ToggleButton>
      </ToggleWrapper>
    </Container>
  );
};

export default FeedbackToggle;
