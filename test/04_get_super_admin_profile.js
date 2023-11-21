import { supertest, defaults, expect, evolvity, generateAccessToken } from '../config/common_imports';

const get_profile_endpoint = '/api/v1/superadmin/get-profile';
let token = '';

describe('GET Super Admin Profile Info', () => {
  before(async () => {
    token = await generateAccessToken();
  });

  it.only('GET /get super-admin profile', async function () {
    const res = await evolvity
      .post(get_profile_endpoint)
      .set('Authorization', `Bearer ${token}`);

    console.log('Access Token: ' +token); 
    console.log('Status: ' + res.status);
    console.log('Message: ' + res.body.message);

    expect(res.body.data.email).to.equal('hemant.5exceptions@gmail.com');
    console.log('Assertion Passed: Email matches');

    console.log('Response Body : '); 


    console.log(res.body);
    
  });
});
