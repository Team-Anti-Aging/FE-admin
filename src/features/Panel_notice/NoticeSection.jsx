import styled from 'styled-components';
//컴포넌트
import NoticeStackBarChart from './NoticeStackBarChart';
import NoticeDetail from './NoticeDetail';

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
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 4rem;
  margin-right: 3rem;
`;
const NoticeSection = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const { trailName } = useTrailNameStore();
  const { NoticeChart } = useChartStore();

  return (
    <Container>
      {trailName === null ? (
        <>
          <Wrapper>
            <Title>Today</Title>
            <Title>{formattedDate}</Title>
          </Wrapper>
          <NoticeStackBarChart NoticeChart={NoticeChart} />
        </>
      ) : (
        <NoticeDetail />
      )}
    </Container>
  );
};

export default NoticeSection;
