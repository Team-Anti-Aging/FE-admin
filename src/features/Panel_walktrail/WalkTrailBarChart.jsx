import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  {
    name: '홍릉두',
    불편: 6,
    제안: 2,
  },
  {
    name: '청량가로',
    불편: 5,
    제안: 5,
  },
  {
    name: '장안벚꽃',
    불편: 10,
    제안: 8,
  },
  {
    name: '배봉두',
    불편: 15,
    제안: 3,
  },
  {
    name: '천장산하늘',
    불편: 14,
    제안: 1,
  },
];

const Container = styled.div`
  width: 90%;
  height: 80%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding-top: 1rem;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0 auto;
`;
const WalkTrailBarChart = () => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={2000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
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
