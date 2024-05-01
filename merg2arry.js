function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
      mergedArray.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
      mergedArray.push(arr2[j]);
    }
    
    return mergedArray;
  }
  
  let arr1 = [1, 2, 3,34,45,5454,6656];
  let arr2 = [4, 5, 6];
  let mergedArray = mergeArrays(arr1, arr2);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
  for (let k = 0; k < mergedArray.length - 1; k++) {
    for (let l = 0; l < mergedArray.length - k - 1; l++) {
      if (mergedArray[l] > mergedArray[l + 1]) {
        let temp = mergedArray[l];
        mergedArray[l] = mergedArray[l + 1];
        mergedArray[l + 1] = temp;
      }
    }

  }
  console.log(mergedArray);