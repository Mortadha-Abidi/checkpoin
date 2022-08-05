///// count vowels ////
function getCount(str) {
  
    let count=0
    let vowels=["a", "e", "i", "o", "u"]
    for(let i=0;i<str.length;i++){
      if(vowels.includes(str[i])){
        count++
      }
    }
    return count
  }
//// odd or even number //
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
   }
   ///// get midle char ///
   function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
////// opposite number////
function opposite(number) {
  //your code herere
  return -number
}
//// mumbling ////
function accum(s) {
    return [...s].map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  /////is square ////
  var isSquare = function(n){
    return Math.sqrt(n)%1===0
  }
  /////// dis
  disemvowel = str => str.replace(/[aeiou]/gi,'');
  /////