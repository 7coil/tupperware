/**
 * How to do some tupperware without actually using the formula:
 * aka. reversing the method of derivation
 * 
 * This is also a test of BigInt, limitless integers for JavaScript.
 * Since 2018-10-03, this script works in Node.js and Google Chrome
 * 
 * https://en.wikipedia.org/wiki/Tupper%27s_self-referential_formula
 * 
 * 1. Divide the value of k by 17
 * 2. Check if bits are odd or not, and add to array
 * +----+
 * |8765| <-- In this order, from bottom right upwards
 * |4321|
 * +----+
 * 3. Display image in the correct order.
 * 
 * This product is licenced under the CC0 1.0 Universal
 * This was made by 7coil.
 * Delete this and the previous lines if you want - It's public domain
 */

// Grab a value of k and put it in.
const k = 132972994700173100631630934642728759712125391822447142948716063964992752747913693386562924644901379491571189210493706788045241938345082755370592780551745392203161781625307214133558822933764422422600086797302924346492553004939052968733947475883346621445778510099863981738440509581442634107114491739153081412108421765666328654947843978690814762780863403274523745763656800170556987226637963090400045598464125052420918658881708917804787659782569374225044790226407670152227103544288043493638687607469056n

// Perform step 1
const divided = k / 17n;
let i = 0;
let j = 0;

// This loop is for aesthetic reasons.
// You could make a loop which counts up to 1926, but you need :eyes:
let incrementor = 0;
const image = [];
for(i = 0; i < 18; i++) {
  for(j = 0; j < 107; j++) {
    val = (divided >> BigInt(incrementor));
    incrementor++;
    image.push((val & 1n) === 1n ? '#' : ' ');
  }
}

// Create an array of empty strings, one for each row
let picture = [];
for(i = 0; i < 17; i++) {
  picture[i] = '';
}

// Write data to each row
for(j = 0; j < 106; j++) {
  for(i = 0; i < 17; i++) {
    picture[i] += image.shift();
  }
}

// Flip the image along the y-axis, about x = 0
console.log(picture.map(line => line.split('').reverse().join('')).join('\n'));
