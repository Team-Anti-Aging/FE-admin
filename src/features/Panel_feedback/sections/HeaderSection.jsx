import styled from 'styled-components';
import pos from '../../../assets/img/position.png';
import { useFeedbackStore } from '../../../store/useFeedbackStore';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
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
  gap: 0.5rem;
  color: var(--grey);
`;
const Name = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
const Img = styled.img``;
const Text = styled.span``;

const UploadButton = styled.button`
  width: 15rem;
  height: 5rem;
  margin-left: 10rem;
  font-size: 2rem;
  color: var(--white);
  background-color: var(--mainGreen);
  border-radius: 20px;
  font-weight: bold;
`;

const HeaderSection = () => {
  const { feedbackDetail } = useFeedbackStore();
  return (
    <Container>
      <InfoBox>
        <Name>{feedbackDetail?.walktrail}</Name>
        <Wrapper>
          <Img src={pos} />
          <Text>{feedbackDetail?.location}</Text>
          <Text>{feedbackDetail?.created_at}</Text>
        </Wrapper>
      </InfoBox>
      <UploadButton>처리하기</UploadButton>
    </Container>
  );
};

export default HeaderSection;
