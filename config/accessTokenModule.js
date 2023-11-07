let access_token;

function setAccessToken(token) {
  access_token = token;
}

function getAccessToken() {
  return access_token;
}

module.exports = { setAccessToken, getAccessToken };
