const axios = require('axios');

module.exports = function postPixToken() {

  return axios.post('https://oauth.hm.bb.com.br/oauth/token', {
    grant_type: 'client_credentials',
    scope: 'cob.read cob.write pix.read pix.write'
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ZXlKcFpDSTZJbUV5TURJMk56UXROVGsxTkMwME5XUmpMVGs1SWl3aVkyOWthV2R2VUhWaWJHbGpZV1J2Y2lJNk1Dd2lZMjlrYVdkdlUyOW1kSGRoY21VaU9qVXlOVGMxTENKelpYRjFaVzVqYVdGc1NXNXpkR0ZzWVdOaGJ5STZNWDA6ZXlKcFpDSTZJbUk0TmpRME1EVXRaV1JpTmkwMFlqZzJMV0V3WkdRdE5HSmxNVGRrT1RCalpEZ3dORGcyWlRNM01tRXRNR1ZsTmlJc0ltTnZaR2xuYjFCMVlteHBZMkZrYjNJaU9qQXNJbU52WkdsbmIxTnZablIzWVhKbElqbzFNalUzTlN3aWMyVnhkV1Z1WTJsaGJFbHVjM1JoYkdGallXOGlPakVzSW5ObGNYVmxibU5wWVd4RGNtVmtaVzVqYVdGc0lqb3hMQ0poYldKcFpXNTBaU0k2SW1odmJXOXNiMmRoWTJGdklpd2lhV0YwSWpveE5qY3pNREkwTmpNNU9URTBmUQ=='
    }
  });

};
