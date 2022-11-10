const postMaxiPago  = require('./post-maxi-pago');
const xmlExtract    = require('./xml-extract');
const postedXmlData = require('./post-xml-data');

module.exports = function processPostCob( req, res ) {

  return new Promise( (resolve, reject) => {

    let cliente = req.body;
    let dataXml = postedXmlData( cliente );

    postMaxiPago( dataXml ).then( resp => {

      let orderId = xmlExtract(resp.data, '<pay_order_id>', '</pay_order_id>');
      let message = xmlExtract(resp.data, '<message>', '</message>');

      resolve({
        orderId,
        message
      });

    }).catch( err => {

      reject( err );

    });

  });

};
