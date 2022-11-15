module.exports = function httpOptions() {

  return {
    headers: {
      'Content-Type': 'application/xml', //<- To SEND XML
      'Accept': 'application/xml',       //<- To ask for XML
      'Response-Type': 'xml'             //<- b/c Angular understands text
    }
  };

};
