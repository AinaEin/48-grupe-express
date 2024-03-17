function lastLetter(name) {
 
  if (name.substring(name.length - 1) === "ė") {
    return toUpperCaseFirstLetter(name.slice(0, -1) + "e!");
  }

  console.log(name.substring(name.length - 2) === "as");
  if (name.substring(name.length - 2) === "as") {
    return toUpperCaseFirstLetter(name.slice(0, -2) + "ai!");
  } 

  if (name.substring(name.length - 2) === "us") {
    return toUpperCaseFirstLetter(name.slice(0, -2) + "au!");
  }
  
  if (name.substring(name.length - 2) === "is") {
    return toUpperCaseFirstLetter(name.slice(0, -1) + "i!");
  }
  return toUpperCaseFirstLetter(name);
}

function  toUpperCaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { lastLetter };