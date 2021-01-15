const AnalyzerTypeBase = require('./analyzerTypeBase');

const stringAnalyzerType = new AnalyzerTypeBase('string','El valor pasado no es un string','',(value) => {
  if(String(value) === 'true' || String(value) === false){
    return false;
  }

  if(String(value).charAt(0).match(/[0-9]/)){
    return false;
  }

  return true;
});

module.exports = stringAnalyzerType;