import styled from 'styled-components';

import InfoCard from './InfoCard';

const Container = styled.div`
  padding: 1rem;
  flex: 3;
  overflow-y: auto; // 높이 초과하면 스크롤
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start; // 스크롤 짤림 현상 방지
  border-bottom: solid var(--grey);
`;

//TODO 더미 삭제
const dummy = [
  { name: '홍릉두물길', unresolved_count: 4 },
  { name: '청량가로수길', unresolved_count: 9 },
  { name: '장안벚꽃안길', unresolved_count: 2 },
  { name: '배봉두매十里(십리)길', unresolved_count: 1 },
  { name: '천장산하늘길', unresolved_count: 8 },
];

const InfoSection = () => {
  return (
    <Container>
      {dummy.map((info, idx) => {
        return <InfoCard key={idx} info={info} />;
      })}
    </Container>
  );
};

export default InfoSection;
