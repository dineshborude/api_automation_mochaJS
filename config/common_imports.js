// import supertest from "supertest";
// import defaults from "../config/defaults.js";
// import { expect } from "chai";

// const evolvity = supertest(defaults.baseURL);

// // export default imports;
// export { supertest, defaults, expect, evolvity };

import supertest from 'supertest';
import defaults from '../config/defaults.js';
import { expect } from 'chai';

const evolvity = supertest(defaults.baseURL);

export { supertest, defaults, expect, evolvity};

export const generateAccessToken = async () => {
  const bodyData = {
    "username": "hemant.5exceptions@gmail.com",
    "password": "Admin@1234",
    "role_id": "3"
  };

  try {
    const res = await evolvity
      .post('/api/v1/superadmin/login')
      .send(bodyData);

    if (res.status !== 200) {
      throw new Error(`Failed to authenticate: Status ${res.status}`);
    }

    return res.body.data.login.access_token;
  } catch (error) {
    // Handle any errors that may occur during the request
    console.error(error);
    throw error;
  }
};
