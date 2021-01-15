const AnalyzerTypeBase = require('./analyzerTypeBase');

const boolAnalyzerType = new AnalyzerTypeBase('boolean','El valor pasado no es un boolean',true,(value) => {
  if(String(value) !== 'true' && String(value) !== 'false'){
    return false;
  }

  return true;
});

module.exports = boolAnalyzerType;