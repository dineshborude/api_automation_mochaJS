import supertest from "supertest";
import { expect } from "chai";

const loginData = require('../config/super_admin_data.js');
const evolvity = supertest('https://staging.humanlytic.com:9000');
const endpointPath = '/api/v1/superadmin/login';

global.access_token = "";

describe('Super Admin Login =>', () => {

  it('POST /super-admin-login', function (done) {


    const superAdminLogin = {
      "username": loginData.username,
      "password": loginData.password,
      "role_id": loginData.role_id,
    }

    evolvity
      .post(endpointPath)
      .send(superAdminLogin)
      .end((err, res) => {
        if (err) {
          console.error(err);
          done(err); // Pass the error to Mocha
          return;
        }

        console.log('Status: ' + res.status);
        console.log('Message: ' + res.body.message);

        try {

          access_token = res.body.data.login.access_token;

          console.log(access_token);
          

          expect(res.body.data.profile.user_name).to.equal('Hemant Kumar');


          console.log(res.body);

          done();

        } catch (assertionError) {

          done(assertionError); // Pass the assertion error to Mocha

        }
      });
  });
  
});
