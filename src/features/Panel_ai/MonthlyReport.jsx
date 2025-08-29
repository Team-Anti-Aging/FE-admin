import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

//api
import { monthlyReport } from '../../apis/api/report';

const ReportForm = styled.form`
    display: flex;
    justify-content: center;
    height: 3rem;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
`;

const ReportBtn = styled.button`
    width: 18rem;
    height: 2rem;
    background-color: var(--mainGreen);
    color: var(--white);
    font-size: 1rem;
    border-radius: 15px;
`;
const AiContentDiv = styled.div`
    white-space: pre-wrap;
    overflow-wrap: anywhere; /* 긴 단어 줄바꿈 */
    padding: 2rem;
    font-size: 1.2rem;
`;
const ReportDiv = styled.div``;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;
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
    font-size: 1rem;
    opacity: 0.8;
    display: grid;
    justify-items: center;
    gap: 0.75rem;
`;

const MonthlyReport = ({ trailName, reportType }) => {
    const [ym, setYm] = useState(() => new Date().toISOString().slice(0, 7)); // "YYYY-MM"
    const [aiText, setAiText] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reportType) return alert('리포트 유형을 선택하세요.');
        const [year, month] = ym.split('-'); // "2025-09" -> ["2025","09"]

        const body = {
            year: Number(year),
            month: Number(month),
        };
        console.log('send', body);
        setLoading(true); // 추가
        setAiText(null);
        try {
            const ai_report = await monthlyReport(trailName, body);
            console.log(ai_report);
            setAiText(ai_report.replace(/[*#]/g, '')); // 별 제거
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false); // 추가
        }
    };

    return (
        <>
            <ReportForm onSubmit={handleSubmit}>
                <input type="month" value={ym} onChange={(e) => setYm(e.target.value)} style={{ fontSize: '1.2rem' }} />
                <ReportBtn>{trailName} 리포트 확인하기</ReportBtn>
            </ReportForm>
            <AiContentDiv>
                {loading ? (
                    <LoadingWrap>
                        <Loader aria-label="loading" />
                        <div>AI가 리포트를 생성하고 있어요…</div>
                    </LoadingWrap>
                ) : (
                    <ReportDiv>{aiText}</ReportDiv>
                )}
            </AiContentDiv>
        </>
    );
};

export default MonthlyReport;
