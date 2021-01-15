const allAnalyzers = require('./analyzers/allAnalyzers');

let parserArgs = (argsString) => {
  const divBySpaces = String(argsString.replace(/\s\s+/g, ' ').trim()).split(' ');
  const parsedArgs = {};
  let prevArg = false;

  for(i in divBySpaces){
    const item = divBySpaces[i];

    if(prevArg){
      parsedArgs[prevArg] = item.match(/^(-)[a-zA-Z]*$/)  ? {default : true} : {value : item};
      prevArg = false;
    }

    if(item.match(/^(-)[a-zA-Z]*$/)){
      prevArg = item;
      parsedArgs[item] = parseInt(i)+1 === parseInt(divBySpaces.length)  ? {default : true} : {};
    }
  }

  return parsedArgs;
}

const analyzer = (schema,realValues) => {
  const parsedArgs = parserArgs(realValues);
  let typeError = '';
  const notFoundErrors = [];
  const realArgs = Object.keys(parsedArgs);
  const defValues = {};
  for(const index in realArgs){
    const arg = realArgs[index];

    if(!schema[arg]){
      notFoundErrors.push(arg);
      continue;
    }

    const infoCurrentArg = schema[arg];

    if(!parsedArgs[arg].default && !allAnalyzers[infoCurrentArg].analyzer(parsedArgs[arg].value)){
      typeError = allAnalyzers[infoCurrentArg].typeErrorMessage;
      continue;
    }

    if(parsedArgs[arg].default) {
      defValues[arg] = allAnalyzers[infoCurrentArg].defaultValue;
      continue;
    }

    defValues[arg] = parsedArgs[arg].value;
  }
  
  return {
    notFoundErrors,
    typeError,
    parsedArgs : defValues
  }
}

module.exports = analyzer;