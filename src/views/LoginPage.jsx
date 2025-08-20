import styled from 'styled-components';

// 훅
import { useNavigate } from 'react-router-dom';

// api
import { postLogin } from '../apis/api/login';
import { setCookie, removeCookie } from '../apis/utils/cookie';

// 스토어
import { useLoginStore } from '../store/useLoginStore';

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
  const { login } = useLoginStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    //폼 데이터에서 입력값 추출 (name설정 필수)
    const fd = new FormData(e.currentTarget);
    const info = {
      username: fd.get('username'),
      password: fd.get('password'),
    };
    try {
      const { access, refresh } = await postLogin(info);
      // 로그인 세팅
      login();
      setCookie('accessToken', access, { path: '/', secure: true });
      setCookie('refreshToken', refresh, { path: '/', secure: true });
      //리디렉션
      navigate('/');
    } catch (e) {
      //실패 처리
      alert('실패');
    }
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Input name="username" type="text" placeholder="아이디" autoComplete="username" required />
        <Input name="password" type="password" placeholder="비밀번호" autoComplete="current-password" required />
        <Bnt type="submit">로그인</Bnt>
      </Form>
      <button
        onClick={() => {
          removeCookie('accessToken');
          removeCookie('refreshToken');
          localStorage.removeItem('auth-storage');
        }}>
        쿠키버리기
      </button>
    </Container>
  );
};

export default LoginPage;
