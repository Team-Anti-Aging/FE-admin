import styled from 'styled-components';

//컴포넌트
import WalkTrailPieRed from './WalkTrailPieRed';
import WalkTrailPieBlue from './WalkTrailPieBlue';

//스토어
import { useFeedbackStore } from '../../store/useFeedbackStore';

const Container = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 2rem;
`;

const WalkTrailDetail = ({ trailName }) => {
  const { redData, blueData } = useFeedbackStore();
  return (
    <Container>
      <Title>{trailName} 카테고리</Title>
      <Wrapper>
        <WalkTrailPieRed redData={redData} />
        <WalkTrailPieBlue blueData={blueData} />
      </Wrapper>
    </Container>
  );
};

export default WalkTrailDetail;
