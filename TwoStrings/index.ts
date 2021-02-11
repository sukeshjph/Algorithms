const  getObjMap = str => {
  const obj = new Map()
  for(const ch of str){
    obj[ch] = (obj[ch] || 0) + 1      
  }  
  return obj
 }

export function twoStrings(s1, s2) {
  const s1Map = getObjMap(s1)
  const s2Map = getObjMap(s2)
   
   
   for(const c in s1Map){
       if(s2Map[c]){
           return "YES"
       }      
       
   }
   
   return "NO"
 
   
 }