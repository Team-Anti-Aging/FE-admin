import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 96%;
  height: 80%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding-top: 1rem;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0 auto;
`;
const WalkTrailBarChart = ({ walkTrailChart }) => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={2000}
          height={300}
          data={walkTrailChart}
          margin={{
            top: 5,
            right: 10,
            left: -30,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="불편" fill="#E07373" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="제안" fill="#4789F7" activeBar={<Rectangle fill="#A8C9FF" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default WalkTrailBarChart;
