import styled from 'styled-components';

const Container = styled.div`
  height: 8vh;
  border-bottom: 2px solid black;
  width: 90%;
  flex-shrink: 0; // flex box에서 자식요소의 크기를 맞추는 것을 막기 위해서 사용. (overflow작동)
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WalkwayName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const WalkwayComponent = () => {
  return (
    <Container>
      <WalkwayName>매봉두메길</WalkwayName>
      <Text>미처리 알림10건</Text>
    </Container>
  );
};

export default WalkwayComponent;
