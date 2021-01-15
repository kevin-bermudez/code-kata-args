const AnalyzerTypeBase = require('./analyzerTypeBase');

const intAnalyzerType = new AnalyzerTypeBase('integer','El valor pasado no es un número entero',0,(value) => {
  if(!String(value).match(/^(-)?[0-9]*$/)){
    return false;
  }

  return true;
});

module.exports = intAnalyzerType;