 
  function whileLoop(n){
    while (n>0){
     console.log (--n)
    } 
     return ("done")
     
  }
  
 function maybeTrue() {
  return Math.random() >= 0.5
} 
  
  function doWhileLoop(array){
    do{return array.slice(array.length)
      ;
    }while(array.length> 0 && maybeTrue())
}
 