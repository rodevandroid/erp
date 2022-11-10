const getXmlData    = require('./get-xml-data');
const postMaxiPago  = require('./service/post-maxi-pago');
const xmlExtract    = require('./service/xml-extract');

module.exports = function processaGetCob( req, res ) {

  return new Promise( (resolve, reject) => {

    let cliente = req.body;
    let getXml  = getXmlData(cliente?.link);

    postMaxiPago( getXml ).then( resp => {

      let statusText  = xmlExtract( resp.data, '<status>', '</status>');
      let pedidoId    = xmlExtract( resp.data, '<referenceNum>', '</referenceNum>');

      resolve({
        statusText,
        pedidoId
      });

    }).catch( err => {

      reject( err );

    });

  });

};
