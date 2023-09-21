import { Instance } from  '../Instance'
export const getUsers = async () => {
  try {
    const response = await Instance.get(`/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUser = async (id) => {
  try {
    const response = await Instance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateUser = async ( params ) => {
  console.log('update api' +
    'api te3st', params)
  try {
    const response = await Instance.put(`/users/${params.id}`,params.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteUser = async (id) => {
  try {
    const response = await Instance.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

