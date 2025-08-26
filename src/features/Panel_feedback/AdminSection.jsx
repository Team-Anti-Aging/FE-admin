import styled from 'styled-components';
import { useState } from 'react';
import { postAdminFeedback } from '../../apis/api/feedback';
const Form = styled.form`
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

const FileLable = styled.label`
  height: 18rem;
  width: 18rem;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddImg = styled.div`
  width: 7rem;
  height: 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  color: var(--grey, #888);

  border: 1.5px dashed var(--grey, #888);
`;

const PrevImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; // 비율 유지
`;

const Title = styled.span`
  font-weight: bold;
  margin-left: 1rem;
  font-size: 0.7rem;
`;
const TextBox = styled.textarea`
  border: solid 0.7px;
  border-radius: 15px;
  width: 16rem;
  height: 7rem;
  padding: 0.5rem;
  overflow-y: auto; // 넘치면 스크롤 생성
  overflow-wrap: anywhere; // 긴단어 줄바꿈
`;
const UploadButton = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--mainGreen);
  border-radius: 10px;
  font-weight: bold;
`;

const AdminSection = ({ feedbackDetail }) => {
  const [input, setInput] = useState('');
  const [preview, setPreview] = useState(null); //  미리보기용 상태

  //업로드 핸들러
  const handSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const img = e.currentTarget.elements.fileImg.files[0];

    //폼데이터 구성
    formData.append('feedback', feedbackDetail.id);
    formData.append('status', 'in_progress');
    formData.append('response_content', input);
    formData.append('response_image', img);

    

    try {
      await postAdminFeedback(feedbackDetail.id, formData);
      alert('처리완료');
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  // 미리보기 핸들러
  const handlePrev = (e) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;
    const img = fileList[0]; //File 객체(= Blob) 1) 바이너리 파일이다. 2) FormData로 보낼 땐 이걸 그대로 넣는다.
    const reader = new FileReader();
    reader.readAsDataURL(img); // 파일을 Data URL 문자열로 변환. -> 비동기 작업
    reader.onload = () => setPreview(reader.result); // //Data URL(문자열) : "data:image/jpeg;base64,/9j/4AAQSkZJRg... (생략)"
  };
  return (
    <Form onSubmit={handSubmit}>
      <Box $height="20rem">
        <Title>After</Title>
        <FileLable>
          <input
            type="file"
            accept="image/*"
            name="fileImg"
            onChange={(e) => handlePrev(e)}
            style={{ display: 'none' }}
          />
          {preview ? <PrevImg src={preview} alt="" /> : <AddImg>+</AddImg>}
        </FileLable>
      </Box>
      <Box $height="9rem">
        <Title>관리자 코멘트</Title>
        <TextBox value={input} onChange={(e) => setInput(e.target.value)} />
      </Box>
      <UploadButton type="submit">처리하기</UploadButton>
    </Form>
  );
};

export default AdminSection;
