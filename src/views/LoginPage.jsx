import styled from 'styled-components';
import { postLogin } from '../apis/api/login';
import { useLoginStore } from '../store/useLoginStore';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--mainBeige);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  height: 5rem;
  width: 30rem;
  border-radius: 15px;
  padding-left: 2rem;
  font-size: 1.5rem;
  box-sizing: border-box;
`;

const Bnt = styled.button`
  height: 5rem;
  width: 60%;
  color: var(--white);
  background-color: var(--mainGreen);
  font-size: 2rem;
  border-radius: 15px;
`;

const LoginPage = () => {
  const { setLogin } = useLoginStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    //폼 데이터에서 입력값 추출 (name설정 필수)
    const fd = new FormData(e.currentTarget);
    const info = {
      username: fd.get('username'),
      password: fd.get('password'),
    };

    // API요청
    const { access, refresh } = await postLogin(info);

    // 로그인 세팅
    setLogin(access);
    alert('로그인 성공!');

    //리디렉션
    navigate('/');
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Input name="username" type="text" placeholder="아이디" autoComplete="username" />
        <Input name="password" type="password" placeholder="비밀번호" autoComplete="current-password" />
        <Bnt type="submit">로그인</Bnt>
      </Form>
    </Container>
  );
};

export default LoginPage;
