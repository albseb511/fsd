// Two number sum

// input array = [3,5,-4,8,11,1,-1,6]
// target_sum = 10

// sample output
// [-1,11]

// approach 2 pointer

function twoNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a,b)=>a-b)
      
      let len = array.length
      // console.log(array, len)
  // 	-4 -1 1 3 5 6 8 11
      let res = []
      for(let i=0, j=len-1; i<len && i<j; ){
              let sum = array[i] + array[j]
              // console.log(sum)
              if( targetSum === sum  ){
                  res.push(array[i],array[j])
                  i++
              }
          else{
              if( sum < targetSum ){
                  i++
              }
              else{
                  j--
              }
          }
      }
      return res
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  