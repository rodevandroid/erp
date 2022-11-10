const axios = require("axios")

module.exports = function getPixToken( param ) {

  return axios.put('https://api.hm.bb.com.br/pix/v1/cobqrcode/?gw-dev-app-key=d27be77904ffab90136ce17d60050056b9f1a5b7', {
    calendario: {
        expiracao: 36000
    },
    devedor: {
        cpf: "12345678909",
        nome: param.pixDados.cliente
    },
    valor: {
        original: "5000"
    },
    chave: "testqrcode01@bb.com.br",
    solicitacaoPagador: "Cobrança dos serviços prestados."
}, {headers: {
    Authorization: 'Bearer ' + param.token,
    'Content-Type': 'application/json'
  }});

};
