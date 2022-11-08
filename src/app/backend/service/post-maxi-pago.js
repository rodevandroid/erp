const axios = require('axios');

module.exports = function postMaxiPago( xmlData ) {

  return axios.post('https://testapi.maxipago.net/UniversalAPI/postAPI', xmlData, {
    headers: {
      'Content-Type': 'application/xml',
      'Accept': 'application/xml',
      'Response-Type': 'text'
    }
  });

};
