import { supertest, defaults, expect, evolvity } from '../config/common_imports';
const { endpointPath, loginData } = require('../config/super_admin_data.js');


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
          done(err); 
          return;
        }

        console.log('Status: ' + res.status);
        console.log('Message: ' + res.body.message);

        try {

          access_token = res.body.data.login.access_token;

          console.log('Access Token : '+access_token);
          

          // expect(res.body.data.profile.user_name).to.equal('Dinesh Borudiya');
          
          console.log();
          console.log('Response Body : '); 
          console.log(res.body);

          done();

        } catch (assertionError) {

          done(assertionError); 

        }
      });
  });
  
});
