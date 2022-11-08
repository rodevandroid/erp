const express     = require("express");
const app         = express();
const cors        = require('cors');
const bodyParser  = require('body-parser')
const axios       = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postedXmlData = require('./service/post-xml-data');
const getXmlData    = require('./service/get-xml-data');
const xmlExtract    = require('./service/xml-extract');

const allowedOrigins = ['http://localhost:4200'];

const options = {
  origin: allowedOrigins
};

app.use(cors(options));

const port = 3000;

app.post("/gerarLink", (req, res) => {

  let cliente = req.body;
  let dataXml = postedXmlData( cliente );

  axios.post('https://testapi.maxipago.net/UniversalAPI/postAPI', dataXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Accept': 'application/xml',
      'Response-Type': 'json'
    }
  }).then( resp => {

    let orderId = xmlExtract(resp.data, '<pay_order_id>', '</pay_order_id>');
    let message = xmlExtract(resp.data, '<message>', '</message>');

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

  let cliente = req.body;
  let getXml  = getXmlData(cliente?.link);

  axios.post('https://testapi.maxipago.net/UniversalAPI/postAPI', getXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Accept': 'application/xml',
      'Response-Type': 'text'
    }
  }).then( resp => {

    let statusText  = xmlExtract( resp.data, '<status>', '</status>');
    let pedidoId    = xmlExtract( resp.data, '<referenceNum>', '</referenceNum>');

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
