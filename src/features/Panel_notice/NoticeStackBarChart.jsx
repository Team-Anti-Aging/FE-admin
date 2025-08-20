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

const NoticeStackBarChart = ({ NoticeChart }) => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={NoticeChart}
          margin={{
            top: 10,
            right: 20,
            left: -30,
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
