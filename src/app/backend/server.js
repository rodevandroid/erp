const express = require("express");
const axios   = require('axios');
const app     = express();
const cors    = require('cors');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postedXmlData = require('./service/post-xml-data');
const getXmlData    = require('./service/get-xml-data');

const allowedOrigins = ['http://localhost:4200'];

const options = {
  origin: allowedOrigins
};

app.use(cors(options));

const port = 3000;

app.post("/gerarLink", (req, res) => {

  console.clear();

  let cliente = req.body;
  let dataXml = postedXmlData( cliente );

  axios.post('https://testapi.maxipago.net/UniversalAPI/postAPI', dataXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Accept': 'application/xml',
      'Response-Type': 'json'
    }
  }).then( resp => {

    let dados = resp.data;

    const posIniPed = dados.indexOf( '<pay_order_id>' );
    const posFinPed = dados.indexOf( '</pay_order_id>' );
    let orderId     = dados.substr((posIniPed+14), (posFinPed - (posIniPed+14)));

    const posIniMsg = dados.indexOf( '<message>' );
    const posFinMsg = dados.indexOf( '</message>' );
    let message     = dados.substr((posIniMsg+9), (posFinMsg - (posIniMsg+9)));

    res.status(200).send({
      orderId,
      message
    });

  }).catch( err => {

    console.log( err );
    res.status(400).send(err);

  });

});

app.post("/consultarLink", (req, res) => {

  console.clear();

  let cliente = req.body;
  let getXml  = getXmlData(cliente?.link);

  axios.post('https://testapi.maxipago.net/UniversalAPI/postAPI', getXml, {
    headers: {
      'Content-Type': 'application/xml', //<- To SEND XML
      'Accept': 'application/xml',       //<- To ask for XML
      'Response-Type': 'text'            //<- b/c Angular understands text
    }
  }).then( resp => {

    let dados = resp.data;

    const posIniPed = dados.indexOf( '<status>' );
    const posFinPed = dados.indexOf( '</status>' );
    let statusText  = dados.substr((posIniPed+8), (posFinPed - (posIniPed+8)));

    const posIniMsg = dados.indexOf( '<referenceNum>' );
    const posFinMsg = dados.indexOf( '</referenceNum>' );
    let pedidoId    = dados.substr((posIniMsg+14), (posFinMsg - (posIniMsg+14)));

    res.status(200).send({
      statusText,
      pedidoId
    });

  }).catch( err => {

    console.log( err );
    res.status(400).send(err);

  });

});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
