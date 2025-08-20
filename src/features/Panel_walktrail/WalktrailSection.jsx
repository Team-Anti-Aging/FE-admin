import styled from 'styled-components';

//컴포넌트
import WalkTrailDetail from './WalkTrailDetail';
import WalkTrailBarChart from './WalkTrailBarChart';

//스토어
import { useTrailNameStore } from '../../store/useTrailNameStore';
import { useChartStore } from '../../store/useChartStore';

const Container = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 4rem;
`;

const WalktrailSection = () => {
  const { trailName } = useTrailNameStore();
  const { walkTrailChart } = useChartStore();
  return (
    <Container>
      {trailName === null ? (
        <>
          <Title>불편/제안 현황</Title> <WalkTrailBarChart walkTrailChart={walkTrailChart} />
        </>
      ) : (
        <WalkTrailDetail trailName={trailName} />
      )}
    </Container>
  );
};

export default WalktrailSection;
