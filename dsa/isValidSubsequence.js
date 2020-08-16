// input
// array = [ 5, 1, 22, 25, 6, -1, 8, 10 ]
// sequence = [ 1, 6, -1, 10]
// output true
function isValidSubsequence(array, sequence) {
    // Write your code here.
      let i = 0;
      let flag = true
      
      if(sequence.length > array.length){
          return false
      }
      
      for( index in  sequence ){
          let item = sequence[index]
          while( i <= array.length ){
              if( i===array.length ){
                  flag = false
                  break
              }
              i++
              if( array[i-1] === item ){
                  // console.log(item)
                  break
              }
          }
          
      }
      // console.log(flag)
      return flag
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  