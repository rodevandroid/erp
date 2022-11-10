const axios = require('axios');

module.exports = function postPixToken() {

  return axios.post('https://oauth.hm.bb.com.br/oauth/token', {
    grant_type: 'client_credentials',
    scope: 'cob.read cob.write pix.read pix.write'
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ZXlKcFpDSTZJakV4WXlJc0ltTnZaR2xuYjFCMVlteHBZMkZrYjNJaU9qQXNJbU52WkdsbmIxTnZablIzWVhKbElqbzBPRFV5TWl3aWMyVnhkV1Z1WTJsaGJFbHVjM1JoYkdGallXOGlPakY5OmV5SnBaQ0k2SW1NM05DSXNJbU52WkdsbmIxQjFZbXhwWTJGa2IzSWlPakFzSW1OdlpHbG5iMU52Wm5SM1lYSmxJam8wT0RVeU1pd2ljMlZ4ZFdWdVkybGhiRWx1YzNSaGJHRmpZVzhpT2pFc0luTmxjWFZsYm1OcFlXeERjbVZrWlc1amFXRnNJam94TENKaGJXSnBaVzUwWlNJNkltaHZiVzlzYjJkaFkyRnZJaXdpYVdGMElqb3hOalkzT1RJNE56YzRPVFEwZlE='
    }
  });

};
