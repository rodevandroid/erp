const postPixToken  = require('./post-pix-token');
const pixCobranca   = require('./pix-cobranca');

module.exports = function processaPix( req, res ) {

  return new Promise( (resolve, reject) => {

    let pixDados = req.body;

    postPixToken().then( token => {

      pixCobranca({token: token.data.access_token, pixDados: pixDados}).then( resp => {

        resolve( resp.data );

      });

    }).catch( err => {

      reject( err );

    });

  });

};
