module.exports = function pedidoDados( cliente ) {

  return {
    numero: cliente.pedido,
    valor: 153390,
    endereco: 'Rod. Darly Santos',
    bairro: 'Jockey de Itaparica',
    cidade: 'Vila Velha',
    estado: 'ES',
    cep: '29.100-250',
    pais: 'Brasil',
    email: 'rodrigo.almeida@litoraltextil.com.br',
    cpf: '07199988897',
    nome: cliente.cliente,
    sobrenome: 'Coutinho',
    nacimento: '04/15/2022',
    sexo: 'M',
    telefone: '27 99924 8869',
    descricao: 'Pagamento Kit Placa Solar',
    comentario: 'Pagar ate dia 30',
    subject: 'Favor efetuar o pagamento',
    expiracao: '12/07/2022',
    parcelas: 10,
    fraudCheck: 'N',
    storeId: '9478',
    storeKey: 'et9rs13u2v1juixk2z66poxd'
  };

};

