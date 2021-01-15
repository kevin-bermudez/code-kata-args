const stringAnalyzer  = require('./stringAnalyzerType');
const integerAnalyzer = require('./intAnalyzerType');
const boolAnalyzer    = require('./boolAnalyzerType');

module.exports = {
  [stringAnalyzer.dataType] : stringAnalyzer,
  [integerAnalyzer.dataType]: integerAnalyzer,
  [boolAnalyzer.dataType]   : boolAnalyzer
}