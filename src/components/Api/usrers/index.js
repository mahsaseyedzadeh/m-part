import { Instance } from  '../Instance'
export const getUsers = async () => {
  try {
    const response = await Instance.get(`/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};