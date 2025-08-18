import styled from 'styled-components';

import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Container = styled.div`
  width: 19rem;
  height: 19rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0 auto;
`;

const data = [
  { name: '편의시설 확충', value: 3 },
  { name: '경관 개선', value: 5 },
  { name: '정보 제공', value: 19 },
  { name: '프로그램/이벤트', value: 1 },
  { name: '기타', value: 8 },
];

const WalkTrailPieBlue = () => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <Pie
            outerRadius="50%"
            dataKey="value"
            data={data}
            fill="#E07373"
            label={({ name }) => name}
            style={{ cursor: 'pointer' }}>
            {data.map((d, i) => (
              <Cell
                key={d.name}
                fill="var(--mainBlue)" // 기존 색 유지
                onClick={() => alert(d.name)} // ← 조각별 클릭
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
