import styled from 'styled-components';

import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
//스토어
import { useFeedbackStore } from '../../store/useFeedbackStore';

const Container = styled.div`
  width: 19rem;
  height: 19rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0 auto;
`;

const WalkTrailPieBlue = ({ blueData }) => {
  const { setCategoryFeedbacks, feedbacks } = useFeedbackStore();

  //카테고리 피드백만 표시
  const handleCategoryFeedback = (category) => {
    const tmp = feedbacks?.filter((f) => f.category === category);
    setCategoryFeedbacks(tmp);
  };
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <Pie
            outerRadius="50%"
            dataKey="value"
            data={blueData}
            fill="#E07373"
            label={({ name, value }) => (value > 0 ? name : null)}
            style={{ cursor: 'pointer' }}>
            {blueData?.map((d, i) => (
              <Cell
                key={d.name}
                fill="var(--mainBlue)" // 기존 색 유지
                onClick={() => {
                  handleCategoryFeedback(d.name);
                }} // ← 조각별 클릭
                style={{ cursor: 'pointer' }}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default WalkTrailPieBlue;
