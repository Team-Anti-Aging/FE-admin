import * as register from '../api/register';

export const registerService = async (info) => {
  try {
    const res = await register.postRegistration(info);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
