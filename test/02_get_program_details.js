import { supertest, defaults, expect, evolvity, generateAccessToken } from '../config/common_imports';

const program_details_endpoint = '/api/v1/superadmin/get-program-details?company_id=87d258df-6883-4e2e-9110-f1eeb4add334&program_id=d19e2364-2e7c-426b-85f8-dfc8aac2c153';

let token = '';


describe('Program Details', () => {

  before(async () => {
     token = await generateAccessToken();
  });

  it('GET /Get Single Program Details', async function () {
 
    const res = await evolvity
      .get(program_details_endpoint)
      .set('Authorization', `Bearer ${token}`)

        console.log('Access Token: ' +token);     
        console.log('Status: ' + res.status);
        console.log('Message: ' + res.body.message);

        expect(res.body.data.company_id).to.equal('87d258df-6883-4e2e-9110-f1eeb4add334');

        console.log('Response Body : ')
        console.log(res.body);

      });
  });

