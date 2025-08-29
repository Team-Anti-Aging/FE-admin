import styled from 'styled-components';
import { useState } from 'react';
import { useTrailNameStore } from '../../store/useTrailNameStore';

import MonthlyReport from './MonthlyReport';
import BusinessReport from './BusinessReport';

const ContainerDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    overflow-y: auto;
`;
const HeaderDiv = styled.div`
    height: 3rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
`;

const HeaderBtn = styled.button`
    background-color: ${({ $active }) => ($active ? 'var(--mainBeige)' : 'var(--white)')};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    width: 10rem;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: bold;
`;
const MainDiv = styled.div``;

const AiSection = () => {
    const { trailName } = useTrailNameStore();
    const [reportType, setReportType] = useState(null); // 월간 리포트 or AI 보고서

    return (
        <ContainerDiv>
            <HeaderDiv>
                <HeaderBtn $active={reportType === '월간 리포트'} onClick={() => setReportType('월간 리포트')}>
                    월간 리포트
                </HeaderBtn>
                <HeaderBtn $active={reportType === 'AI 보고서'} onClick={() => setReportType('AI 보고서')}>
                    AI 보고서
                </HeaderBtn>
            </HeaderDiv>
            <MainDiv>
                {reportType === '월간 리포트' && <MonthlyReport trailName={trailName} reportType={reportType} />}
                {reportType === 'AI 보고서' && <BusinessReport trailName={trailName} reportType={reportType} />}
            </MainDiv>
        </ContainerDiv>
    );
};

export default AiSection;
