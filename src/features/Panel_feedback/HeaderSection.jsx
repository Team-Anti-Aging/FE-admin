import styled from 'styled-components';
import pos from '../../assets/img/position.png';

const Container = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
`;
const InfoBox = styled.div`
  width: 40rem;
  border-bottom: solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  color: var(--grey);
  align-items: center;
`;
const Name = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
const Img = styled.img``;
const Text = styled.span`
  font-size: ${({ $posi }) => ($posi ? '1rem' : '0.8rem')};
`;

const HeaderSection = ({ feedbackDetail }) => {
  return (
    <Container>
      <InfoBox>
        <Name>{feedbackDetail?.walktrail}</Name>
        <Wrapper>
          <Img src={pos} />
          <Text $posi={true}>{feedbackDetail?.location}</Text>
          <Text>{feedbackDetail?.created_at_parse}</Text>
        </Wrapper>
      </InfoBox>
    </Container>
  );
};

export default HeaderSection;
