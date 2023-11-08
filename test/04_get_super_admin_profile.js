import { generateAccessToken } from '../config/access_token_generator';
import supertest from 'supertest';
import { expect } from 'chai';

const evolvity = supertest('https://staging.humanlytic.com:9000');
const endpointPath = '/api/v1/superadmin/get-profile';
let token = '';

describe('GET Super Admin Profile Info', () => {
  before(async () => {
    token = await generateAccessToken();
  });

  it('GET /get super-admin profile', async function () {
    const res = await evolvity
      .post(endpointPath)
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
