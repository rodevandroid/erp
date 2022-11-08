module.exports = function getXmlData( payOrderId ) {

  return `<?xml version="1.0" encoding="UTF-8"?>
  <api-request>
    <verification>
      <merchantId>9478</merchantId>
      <merchantKey>et9rs13u2v1juixk2z66poxd</merchantKey>
    </verification>
    <command>get-payment-order</command>
    <request>
      <payOrderId>${payOrderId}</payOrderId>
    </request>
  </api-request>`;

};
