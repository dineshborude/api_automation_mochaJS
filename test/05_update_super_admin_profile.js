import { supertest, defaults, expect, evolvity, generateAccessToken } from '../config/common_imports';

const update_admin_profile_path = '/api/v1/superadmin/add-profile';
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
        .post(update_admin_profile_path)
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
  
