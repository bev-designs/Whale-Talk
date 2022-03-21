const input = 'finding nemo';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
   // check for (e)s and add to result arr
   if (input[i] === 'e') {
     resultArray.push(input[i]);
     // console.log(resultArray);
   }
   // check for (u)s and add to result arr
   if (input[i] === 'u') {
     resultArray.push(input[i]);
    // console.log(resultArray);
   }
   // Make the inner loop iterate through the vowels array each time the input runs.
  for (let j = 0; j < vowels.length; j++) {
   // console.log(vowels[j])
   if (input[i] === vowels[j]) {
     resultArray.push(input[i]);
     // console.log(resultArray)
   }
  }
};
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);