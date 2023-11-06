import supertest from "supertest";
import { expect } from "chai";

const evolvity = supertest('https://staging.humanlytic.com:9000');
const EV_TOKEN = 'I0ReBTDoSBgTJDXXB6FcF53Ig0IwFc';

describe('Users', () => {
  it('GET /programs', function (done) {
    this.timeout(5000); // Set a timeout of 5 seconds

    const endpointPath = '/api/v1/superadmin/get-program-details?company_id=87d258df-6883-4e2e-9110-f1eeb4add334&program_id=d19e2364-2e7c-426b-85f8-dfc8aac2c153';
    // const xyz
    evolvity
      .get(endpointPath)
      .set('Authorization', `Bearer ${EV_TOKEN}`)
      .end((err, res) => {
        if (err) {
          console.error(err);
          done(err); // Pass the error to Mocha
          return;
        }

        console.log('Status: ' + res.status);
        try {
          expect(res.body.data.company_id).to.equal('87d258df-6883-4e2e-9110-f1eeb4add334');
          console.log(res.body);
          done();
        } catch (assertionError) {
          done(assertionError); // Pass the assertion error to Mocha
        }
      });
  });
});
