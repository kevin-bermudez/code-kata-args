const AnalyzerTypeBase = function(dataType,typeErrorMessage,defaultValue,analyzer){
  if(typeof dataType !== 'string' || typeof analyzer !== 'function' || typeof typeErrorMessage !== 'string' || typeof defaultValue === 'undefined'){
    throw 'Debe enviar un string en nameType y una función para analyzer'
  }

  this.dataType = dataType;
  this.typeErrorMessage = typeErrorMessage;
  this.defaultValue = String(defaultValue);
  this.analyzer = (value) => {
    const resultAnalyzer = analyzer(value);

    if(typeof resultAnalyzer !== 'boolean'){
      throw 'La respuesta de la función analizadora debe ser un boolean'
    }

    return resultAnalyzer;
  };
}

module.exports = AnalyzerTypeBase;