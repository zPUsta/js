// ---------------Tapşırıq-1-----------------

// let name = prompt("Adınızı daxil edin:");
// console.log(name.length);

// ---------------Tapşırıq-2-----------------

// let word = prompt("sözü daxil edin:");
// let symbol = prompt("yoxlamaq istədiyiniz simvol:");
// let result = word.includes(symbol);
// console.log(result);

// ---------------Tapşırıq-3-----------------

// let word = prompt("sözü daxil edin:");
// let symbol = prompt("yoxlamaq istədiyiniz simvol:");
// let result = word.startsWith(symbol);
// console.log(result);

// ---------------Tapşırıq-4-----------------

// let word = prompt("sözü daxil edin:");
// let symbol = prompt("yoxlamaq istədiyiniz simvol:")
// let result = word.endsWith(symbol);
// console.log(result);


// ---------------Tapşırıq-5-----------------

// let word = prompt("sözü daxil edin:");
// let symbol = prompt("simvolu daxil edin:");
// let result =  word.indexOf(symbol);
// console.log(result);



// ---------------Tapşırıq-6-----------------

let word = prompt("sözü daxil edin:");
let result = /^(?=[A-Z])[A-Z\s]+$/. test(word);
console.log(result); 