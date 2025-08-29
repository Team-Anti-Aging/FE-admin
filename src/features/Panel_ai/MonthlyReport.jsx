import styled from 'styled-components';
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
const AiContentDiv = styled.div``;
const ReportDiv = styled.div``;

const MonthlyReport = ({ trailName, reportType }) => {
    const [ym, setYm] = useState(() => new Date().toISOString().slice(0, 7)); // "YYYY-MM"
    const [aiText, setAiText] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reportType) return alert('리포트 유형을 선택하세요.');
        const [year, month] = ym.split('-'); // "2025-09" -> ["2025","09"]

        const body = {
            year: Number(year),
            month: Number(month),
        };
        console.log('send', body);
        try {
            const ai_report = await monthlyReport(trailName, body);
            console.log(ai_report);
            setAiText(ai_report);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <ReportForm onSubmit={handleSubmit}>
                <input type="month" value={ym} onChange={(e) => setYm(e.target.value)} style={{ fontSize: '1.2rem' }} />
                <ReportBtn>{trailName} 리포트 확인하기</ReportBtn>
            </ReportForm>
            <AiContentDiv>
                <ReportDiv>{aiText}</ReportDiv>
            </AiContentDiv>
        </>
    );
};

export default MonthlyReport;
