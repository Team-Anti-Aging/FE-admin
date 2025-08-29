import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

//api
import { feedbackSearch } from '../../apis/api/feedback';
import { customReport } from '../../apis/api/report';

const ContainerDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ReportForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 20rem;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
`;

const ReportBtn = styled.button`
    width: 20rem;
    height: 2rem;
    background-color: var(--mainGreen);
    color: var(--white);
    font-size: 1rem;
    border-radius: 15px;
`;

const ReportInput = styled.input`
    border-radius: 15px;
    border: solid;
    height: 3rem;
    width: 80%;
    padding-left: 1rem;
`;
const SBtn = styled.div`
    background-color: ${({ $active }) => ($active ? 'var(--mainBeige)' : 'var(--white)')};
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Form = styled.form`
    width: 50%;
    border: 2px solid var(--grey);
    height: 2rem;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0 1rem;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 1rem;
`;
const Input = styled.input`
    font-size: 1rem;
    width: 100%;
`;
const SendBtn = styled.button`
    background-color: var(--white);
    width: 3rem;
    font-size: 1rem;
`;

const AiContentDiv = styled.div`
    white-space: pre-wrap;
    overflow-wrap: anywhere; /* 긴 단어 줄바꿈 */
    padding: 2rem;
    font-size: 1.2rem;
`;
const ReportDiv = styled.div``;
const spin = keyframes`to { transform: rotate(360deg); }`;
const Loader = styled.div`
    width: 36px;
    height: 36px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: var(--mainGreen);
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
    margin: 0 auto;
`;
const LoadingWrap = styled.div`
    text-align: center;
    display: grid;
    justify-items: center;
    gap: 0.75rem;
    opacity: 0.9;
`;

const BusinessReport = ({ trailName, reportType }) => {
    const [aiText, setAiText] = useState(null);
    const [title, setTitle] = useState('');
    const [instruction, setInstruction] = useState(''); // 사용자 요청사항
    const [section, setSection] = useState(''); //  보고서 항목
    const [reportStyle, setReportStyle] = useState('줄글'); // proose / itemized
    const [docsId, setDocsID] = useState([]); // 민원 항목
    const [sendText, setSendText] = useState('');
    const [loading, setLoading] = useState(false);

    //ai 핸들로
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reportType) return alert('리포트 유형을 선택하세요.');

        const body = {
            title: title,
            section: section,
            style: reportStyle,
            instruction: instruction,
            docs_id: docsId,
        };
        console.log('보내는 데이터', body);
        setLoading(true); // 추가
        setAiText(null);
        try {
            const report = await customReport(body);
            console.log('보고서 응답', report);
            setAiText(report.replace(/[*#]/g, ''));
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false); // 추가
        }
    };

    // 제출 핸들러
    const onSearch = async (e) => {
        e.preventDefault();
        const q = sendText.trim();
        if (!q) return; // 빈 문자열 방지

        try {
            const data = await feedbackSearch(q);
            console.log(data);
            const ids = data.map((item) => item.id);
            setDocsID(ids);

            console.log('추출된 ID 배열:', ids);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <ContainerDiv>
            {loading ? ( // 추가
                <AiContentDiv>
                    <LoadingWrap>
                        <Loader aria-label="loading" />
                        <div>AI가 보고서를 생성하고 있어요…</div>
                    </LoadingWrap>
                </AiContentDiv>
            ) : aiText ? (
                <AiContentDiv>
                    <h1>AI 보고서</h1>
                    <ReportDiv>{aiText}</ReportDiv>
                </AiContentDiv>
            ) : (
                <>
                    <Form onSubmit={onSearch}>
                        <Input
                            value={sendText}
                            placeholder="궁금한 정책을 검색해보세요!"
                            onChange={(e) => setSendText(e.target.value)}
                        />
                        <SendBtn type="submit">검색</SendBtn>
                    </Form>
                    <span>해당 키워드의 피드백은 {docsId.length}개 입니다.</span>
                    <ReportForm onSubmit={handleSubmit}>
                        <ReportInput
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="계획 중인 개선 사업 제목을 입력해주세요! ex) 장안근린공원 노후시설물 개선"
                        />
                        <ReportInput
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
                            placeholder="AI가 알아야 할 자세한 내용을 적어주세요!"
                        />
                        <ReportInput
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            placeholder="보고서 항목을 ,로 구분해서 적어주세요! ex) 개요, 현황 ..."
                        />

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <SBtn $active={reportStyle === '줄글'}>줄글</SBtn>
                        </div>
                        <ReportBtn>{trailName} 보고서</ReportBtn>
                    </ReportForm>
                </>
            )}
        </ContainerDiv>
    );
};

export default BusinessReport;
