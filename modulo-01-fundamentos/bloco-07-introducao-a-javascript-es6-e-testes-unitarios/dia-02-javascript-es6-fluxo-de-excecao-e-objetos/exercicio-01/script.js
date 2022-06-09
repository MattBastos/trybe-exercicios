const objectConstructor = (object, key, value) => {
  object[key] = value;
  
  return object;
}

console.log(objectConstructor({}, 'Name', 'Matthews'));