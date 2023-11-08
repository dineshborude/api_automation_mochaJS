import { generateAccessToken } from '../config/access_token_generator';
import supertest from "supertest";
import { expect } from "chai";

const loginData = require('../config/super_admin_data.js');
const evolvity = supertest('https://staging.humanlytic.com:9000');
const endpointPath = '/api/v1/superadmin/add-profile';
let token = '';

describe('Update Super Admin Profile =>', () => {

    before(async () => {
        token = await generateAccessToken();
      });

  it('POST /update super-admin profile', async function () {


    const superAdminUpdate = 
        {
            "profile_pic":"image-1689240509992.png",
            "twofa":0,
            "user_name":"Dinesh Borudiya",
            "email":"hemant.5exceptions@gmail.com",
            "password":null,
            "lang":1
        }
    

        const res = await evolvity
        .post(endpointPath)
        .send(superAdminUpdate)
        .set('Authorization', `Bearer ${token}`);
      
        console.log('Access Token: ' +token);
        console.log('Status: ' + res.status);
        console.log('Message: ' + res.body.message);
       
        expect(res.body.data.user_name).to.equal('Dinesh Borudiya');
        console.log('Assertion Passed: Name matches / Updated');

        console.log('Response Body : '); 
        console.log(res.body);



      });
  });
  
