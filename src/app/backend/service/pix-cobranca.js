const axios = require("axios")

module.exports = function getPixToken( param ) {

  return axios.put('https://api.hm.bb.com.br/pix/v1/cobqrcode/?gw-dev-app-key=5fbe86e7b909797b38250169e5c70e44', {
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
