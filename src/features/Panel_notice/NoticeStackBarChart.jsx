import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 80%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding-top: 1rem;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0 auto;
`;

const data = [
  { name: '홍릉두물길', 제안: 6, 불편: 12 },
  { name: '청량가로', 제안: 3, 불편: 7 },
  { name: '장안벚꽃안길', 제안: 10, 불편: 2 },
  { name: '배봉두', 제안: 1, 불편: 11 },
  { name: '천장산하늘길', 제안: 9, 불편: 9 },
];

const NoticeStackBarChart = () => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="불편" stackId="a" fill="var(--mainRed)" />
          <Bar dataKey="제안" stackId="a" fill="var(--mainBlue)" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default NoticeStackBarChart;
