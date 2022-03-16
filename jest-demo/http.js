
const axios = require('axios');


module.exports = {
  fetchUser() {
    return axios.get('/user/12345').then(res => res.data)
  }
}