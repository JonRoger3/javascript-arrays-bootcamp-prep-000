var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];




function addElementToBeginningOfArray(array, element){
  [element, ...array];
  return array;
  
}

addElementToBeginningOfArray(chocloateBars, reeses);



function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return chocolateBars;
  
}

destructivelyAddElementToBeginningOfArray(chocolateBars, reeses);



function addElementToEndOfArray(array, element){
  return [chocolateBars, plus1];
  
}


function destructivelyAddElementToEndOfArray(array, element){
  chocolateBars.push(plus1);
  return chocolateBars;
  
}


function accessElementInArray(array, element){
  [...chocolateBars];
  return chocolateBars[3];
  
}



function destructivelyRemoveElementFromBeginningOfArray(array){
  chocolateBars.shift();
  return chocolateBars;
  
}


function removeElementFromBeginningOfArray(array){
  chocolateBars.slice(1);
  return chocolateBars;
  
}


function destructivelyRemoveElementFromEndOfArray(array){
  chocolateBars.pop();
  return chocolateBars;
  
}


function removeElementFromEndOfArray(array){
  newChocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
  return newChocolateBars;
  
}


