import styled from 'styled-components';

const Component = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Box = styled.div`
  height: ${({ $height }) => $height};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
const Img = styled.img`
  height: 18rem;
  width: 100%;
  object-fit: contain; // 이미지 비율 유지
`;

const Title = styled.span`
  font-weight: bold;
  margin-left: 1rem;
  font-size: 0.7rem;
`;
const TextBox = styled.div`
  border: solid 0.7px;
  border-radius: 15px;
  width: 90%;
  height: 5rem;
  margin: 0 auto; // Title은 건들지 않고 TextBox만 가운데 정렬하는 방법.
  padding: 0.5rem;
  overflow-y: auto; // 넘치면 스크롤 생성
`;

const UserSection = ({ feedbackDetail }) => {
  return (
    <Component>
      <Box $height="20rem">
        <Title>Before</Title>
        <Img src={feedbackDetail?.feedback_image_url} />
      </Box>
      <Box $height="9rem">
        <Title>문의 내용</Title>
        <TextBox>{feedbackDetail?.feedback_content}</TextBox>
      </Box>
      <Box $height="3rem">
        <Title>카테고리</Title>
        <TextBox>{feedbackDetail?.category}</TextBox>
      </Box>
    </Component>
  );
};

export default UserSection;
