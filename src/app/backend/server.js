const express     = require("express");
const app         = express();
const cors        = require('cors');
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const processPix    = require('./service/process-pix');
const processGetCob = require('./service/process-get-cob');
const processPostCob = require('./service/process-post-cob');

const allowedOrigins = ['http://localhost:4200'];

const options = {
  origin: allowedOrigins
};

app.use(cors(options));

const port = 3000;

app.post("/gerarLink", (req, res) => {

  processPostCob( req, res ).then( resp => {

    res.status(200).send( resp );

  }).catch( err => {

    res.status(400).send(err);

  });

});

app.post("/consultarLink", (req, res) => {

  processGetCob( req, res ).then( resp => {

    res.status(200).send( resp );

  }).catch( err => {

    res.status(400).send(err);

  });

});

app.post("/pix-cobranca", (req, res) => {

  processPix( req, res ).then( resp => {

    res.status( 200 ).send( resp );

  }).catch( err => {

    res.status( 400 ).send( err );

  });

});

app.listen(port, () =>

  console.log(`Example app listening on port ${port}!`)

);
