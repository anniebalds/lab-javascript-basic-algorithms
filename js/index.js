// Iteration 1: Names and Input
//
let hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Imaginary Friend";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""));

let upper1 = hacker1.toUpperCase();
let upper2 = hacker2.toUpperCase();

for (let i = 0; i < upper1.length; i++) {
  if (upper1[i] < upper2[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (upper1[i] > upper2[i]) {
    console.log(`Yo, the navigator goes first definitively.`);
    break;
  } else {
    console.log(`What?! You both have the same name?`);
  }
}

//Bonus 1
let loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique magna tellus, malesuada iaculis quam pellentesque quis. Aliquam augue purus, egestas laoreet porttitor eget, egestas et magna. Nullam fermentum facilisis ultrices. Suspendisse sagittis tempus finibus. Proin mollis ex lacus, sit amet egestas tellus pharetra sit amet. Fusce dapibus enim magna, ut iaculis massa laoreet vitae. Integer dolor velit, bibendum vel est id, pulvinar accumsan nunc.

Sed tristique ullamcorper orci, in finibus leo vestibulum ut. Praesent interdum venenatis ligula, quis fermentum nisl. Phasellus convallis erat sit amet mauris congue lacinia. Mauris rutrum diam quam. Integer vitae accumsan nisi. Vivamus lorem ex, consectetur in hendrerit eget, dapibus et nisl. Pellentesque non augue consectetur, facilisis urna vitae, maximus metus. Pellentesque elementum eget ante in sollicitudin. Quisque vitae nisi leo. Praesent ut viverra velit, at blandit lectus. Duis mattis luctus libero, ac tristique purus elementum at. Pellentesque nisl odio, pretium a lacinia at, aliquet vel eros. Curabitur ante dolor, scelerisque vel enim sit amet, ornare tempus orci. In aliquam ornare erat a rutrum. Suspendisse consequat sit amet urna et lobortis.

Nunc pulvinar, enim ac gravida semper, metus massa varius elit, nec ultricies libero massa vel urna. Nam dignissim mollis nisi at pellentesque. Duis auctor mauris rhoncus odio rhoncus, tincidunt suscipit eros consequat. Vivamus imperdiet pellentesque dolor, et viverra metus dictum sit amet. Nunc vel interdum dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eget eros erat. In congue nibh id ornare finibus.`;

let loremArray = loremString.split(" ");
console.log(`There are ${loremArray.length} words in these paragraphs.`);

let etCount = 0;
for (let i = 0; i < loremString.length; i++) {
  if (loremString[i] === "e" && loremString[i + 1] === "t") {
    etCount += 1;
  }
}
console.log(etCount);

//Bonus 2
let phraseToCheck = `Hello my name is Anna`;
let stringResult = ''

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    stringResult += phraseToCheck[i]
}
 console.log(stringResult)


function checkPalindrome(palindrome) {
    let l = palindrome.length
    for (let i = 0; i < l; i++) 

    if (phraseToCheck[i] === stringResult[i]) return true
    else return false
} 
if (true) console.log('Palindrome!')
else if (false) console.log('No Palindrome!')

checkPalindrome(phraseToCheck)
//this isn't working :(





//workings
// for (let i = 0; i < phraseToCheck.length; i++) {
//     if (i === Math.floor(phraseToCheck.length/2)) break
//     console.log(phraseToCheck[i])

//     let temp = phraseToCheck[i]
//     phraseToCheck[i] = phraseToCheck[phraseToCheck.length-1-i]
//     phraseToCheck[phraseToCheck.length-1-i] = temp 

// }

//console.log(phraseToCheck)

// let reversedPhrase = phraseToCheck.split("").reverse().join("");
// console.log(reversedPhrase);

// for (let i = 0; i < phraseToCheck.length; i++) {}
