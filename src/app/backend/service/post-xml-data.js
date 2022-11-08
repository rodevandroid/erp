const pedidoDados = require('./pedido-dados');

module.exports = function postedXmlData( cliente ) {

  let pedido = pedidoDados( cliente );

  return `<?xml version="1.0" encoding="UTF-8"?>
  <api-request>
    <verification>
        <merchantId>${pedido.storeId}</merchantId>
        <merchantKey>${pedido.storeKey}</merchantKey>
    </verification>
    <command>add-payment-order</command>
    <request>
      <referenceNum>${pedido.numero}</referenceNum>
      <fraudCheck>${pedido.fraudCheck}</fraudCheck>
      <billing>
        <address>${pedido.endereco}</address>
        <address2>1 Andar</address2>
        <district>${pedido.bairro}</district>
        <city>${pedido.cidade}</city>
        <state>${pedido.estado}</state>
        <postalcode>${pedido.cep}</postalcode>
        <country>${pedido.pais}</country>
        <email>${pedido.email}</email>
        <customerIdExt>${pedido.cpf}</customerIdExt>
        <firstName>${pedido.nome}</firstName>
        <lastName>${pedido.sobrenome}</lastName>
        <dob>${pedido.nacimento}</dob>
        <sex>${pedido.sexo}</sex>
        <phone>${pedido.telefone}</phone>
      </billing>
      <transactionDetail>
        <description>${pedido.descricao}</description>
        <comments>${pedido.comentario}</comments>
        <emailSubject>${pedido.subject}</emailSubject>
        <expirationDate>${pedido.expiracao}</expirationDate>
        <payType>
          <creditCard>
            <processorID>1</processorID>
            <operation>sale</operation>
            <numberOfInstallments>${pedido.parcelas}</numberOfInstallments>
            <currencyCode>BRL</currencyCode>
            <amount>${pedido.valor}</amount>
          </creditCard>
        </payType>
      </transactionDetail>
    </request>
  </api-request>`;

};
