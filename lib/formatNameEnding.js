function lastLetter(name) {
  if (name.substring(name.length - 1) === "ė") {
    return name.slice(0, -1) + "e!";
  }

  console.log(name.substring(name.length - 2) === "as");
  if (name.substring(name.length - 2) === "as") {
    return name.slice(0, -2) + "ai!";
  } 

  if (name.substring(name.length - 2) === "us") {
    return name.slice(0, -2) + "au!";
  }
  
  if (name.substring(name.length - 2) === "is") {
    return name.slice(0, -1) + "i!";
  }
  return name;
}

export { lastLetter };