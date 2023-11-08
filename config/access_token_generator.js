import supertest from 'supertest';

const evolvity = supertest('https://staging.humanlytic.com:9000');
const endpointPath = '/api/v1/superadmin/login';

export const generateAccessToken = async () => {
  const bodyData = {
    "username": "hemant.5exceptions@gmail.com",
    "password": "Admin@1234",
    "role_id": "3"
  };

  try {
    const res = await evolvity
      .post(endpointPath)
      .send(bodyData);

    if (res.status !== 200) {
      throw new Error(`Failed to authenticate: Status ${res.status}`);
    }

    return res.body.data.login.access_token;
  } catch (error) {
    // Handle any errors that may occur during the request
    console.error(error);
    throw error;
  }
};
