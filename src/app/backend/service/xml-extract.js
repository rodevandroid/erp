module.exports = function xmlExtract(xml, tagOpen, tagClose) {

  const posIniPed = xml.indexOf( tagOpen );
  const posFinPed = xml.indexOf( tagClose );
  let tagData     = xml.substr((posIniPed+tagOpen.length), (posFinPed - (posIniPed+tagOpen.length)));

  return tagData;

};

