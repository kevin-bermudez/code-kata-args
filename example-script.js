const analyzer = require('./analyzer-args');

const schema = {
  '-n' : 'integer',
  '-s' : 'string',
  '-b' : 'boolean'
}

const exampleScript = (argsString) => {
  const {notFoundErrors,typeError,parsedArgs} = analyzer(schema,argsString);

  if(notFoundErrors.length){
    return `Alguno de los argumentos pasados no está definido en el esquema: ${notFoundErrors.join(', ')}`
  }

  if(typeError){
    return typeError;
  }

  if(Object.values(parsedArgs).length){
    let stringReturn = 'El valor de los argumentos pasados es:';

    Object.keys(parsedArgs).forEach(key => {
      stringReturn += ` ${key}=${parsedArgs[key]}`
    })

    return stringReturn;
  }
}

module.exports = exampleScript;

