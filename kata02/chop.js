var chop = function(value, array) {
  if (array.length === 0){
    return -1;
  } else {
    return findIndex(value, array);
  }

 function findIndex(val, arr, count){
   var length = arr.length;
   var midpoint = parseInt(length/2);
   var indexCount = count || 0;

   if (val> arr[length - 1]){
     return -1;
   } else if (val < arr[0]){
     return -1;
   } else if(val == arr[midpoint]) {
     return midpoint + indexCount;
   } else if(val == arr[0]){
     return indexCount;
   } else if (val < arr[midpoint]){
     return findIndex(val, arr.splice(0, (midpoint-1)));
   } else if (val > arr[midpoint]){
     return findIndex(val, arr.splice(midpoint, length), midpoint);
   } else {
     console.log('error');
   }
 }
};

