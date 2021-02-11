const linearSearch = (inArray,ele) => { 
   for (let index = 0; index < inArray.length; index++) {
     if (inArray[index] === ele) { 
       return index;
     }
     
   }
  
  return -1;
}

console.log(linearSearch(["gg","pier","kite"],"kite66"))