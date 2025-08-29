import { instance } from '../utils/instance';

export const monthlyReport = async (walktrail_name, body) => {
    const { data } = await instance.post(`/admin_func/monthlyreport/${walktrail_name}/`, body);
    console.log('월간 보고서', data);
    return data.ai_report;
};

export const customReport = async (body) => {
    const { data } = await instance.post('/report/custom/', body);
    return data.report;
};
