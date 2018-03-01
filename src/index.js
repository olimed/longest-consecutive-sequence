module.exports = function longestConsecutiveLength(array) {
  // your solution here
  function RedixSort(array, min, max){
    let count = new Array(max - min + 1);
    let i = 0;
    for (i = 0; i < array.length; i++){
      count[array[i] - min]++;
    }
    let idx = 0;
    for (i = 0; i < count.length; i++){
      for (let j = 0; j < count[i]; j++){
        array[idx++] = i + min;
      }      
    }
    return array
  }


  if (array.length <= 1){
    return array.length
  }

  let min = Math.min.apply(Math, array);
  let max = Math.max.apply(Math, array);
  
  array = RedixSort(array, min, max);
  let maxCount = 1;
  let count = 1;
  for (let i = 1; i < array.length; i++){
    if (array[i - 1] == array[i])
      continue;
    if ((array[i] - array[i-1]) == 1)
      count++;
    else{
      if (count > maxCount)
        maxCount = count;
      count = 1;
    }
  }

  return maxCount 
}
