// We can delete this file now, As token can be generated from common_imports file.

import { generateAccessToken } from '../config/access_token_generator';
import supertest from 'supertest';
import { expect } from 'chai';

const evolvity = supertest('https://staging.humanlytic.com:9000');
const endpointPath = '/api/v1/superadmin/get-program-details?company_id=87d258df-6883-4e2e-9110-f1eeb4add334&program_id=d19e2364-2e7c-426b-85f8-dfc8aac2c153';
let token = '';

xdescribe('Program Details', () => {
  before(async () => {
    token = await generateAccessToken();
  });
   
  it('GET /Get Single Program Details', async function () {
    const res = await evolvity
      .get(endpointPath)
      .set('Authorization', `Bearer ${token}`);

    console.log('Access Token: ' +token); 
    console.log('Status: ' + res.status);
    console.log('Message: ' + res.body.message);

    expect(res.body.data.company_id).to.equal('87d258df-6883-4e2e-9110-f1eeb4add334');
    
    console.log('Response Body : '); 
    console.log(res.body);
    
  });
});
