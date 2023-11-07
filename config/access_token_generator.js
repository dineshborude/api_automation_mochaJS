const evolvity = supertest('https://staging.humanlytic.com:9000');
const endpointPath = '/api/v1/superadmin/login';

export const generateAccessToken = async () => {

  const bodyData = 
    {     
      "username":"hemant.5exceptions@gmail.com",
      "password":"Admin@1234",
      "role_id":"3"
   };
   const res = await request 
   evolvity
   .post(endpointPath)
   .send(bodyData)

  return res.body.data.login.access_token

  


}