//NOTE - Assign #1
// do {
//     var showData = document.querySelector(".data-square");
//     var uValue = window.prompt("Can You Enter a Number Value");
//     if (isNaN(uValue)) {
//         alert("Please enter a Number Value");
//     }else {
//         showData.textContent = `You Enter :=> ${uValue}`;
//     }
// }while(isNaN(uValue));

//NOTE - Assign #2
// var showData = document.querySelector(".data-square");
// var uValue = window.prompt("Can You Enter a Number Value");
// var numChange = Number(uValue);
// switch (true) {
//     case isNaN(uValue):
//     showData.textContent = `You Enter :=> ${uValue} it's not a number`;
//         break;
//         case numChange % 3 == 0 && numChange % 4 == 0:
//             showData.textContent = `You Enter :=> ${uValue} Accepted`;
//             break;
//             default:
//                 showData.textContent = `You Enter :=> ${uValue} rejected`;  
// }
//NOTE - Assign #3
// var showData = document.querySelector(".data-square");
// var uValue_1 = window.prompt("Can You Enter a First Integer Value");
// var uValue_2 = window.prompt("Can You Enter a Second Integer Value");
// var numChange_1 = Number(uValue_1);
// var numChange_2 = Number(uValue_2);
// if (isNaN(numChange_1) || isNaN(numChange_2) || !(Number.isInteger(numChange_1)) || !(Number.isInteger(numChange_2))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// }else if (numChange_1 > numChange_2) {
//     showData.textContent = `Max Nume Is :=> ${numChange_1}`;
// }else if (numChange_1 == numChange_2) {
//     showData.textContent = `Equals Values`;
// }
// else {
//     showData.textContent = `Max Nume Is :=> ${numChange_2}`;
// }

// NOTE - Assign #4
// var showData = document.querySelector(".data-square");
// var uValue = window.prompt("Can You Enter a Number Value");
// var numChange = Number(uValue);
// if (isNaN(numChange)  || !(Number.isInteger(numChange))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// } else if (numChange < 0) {
//     showData.textContent = `Negative Number`;
// } else {
//     showData.textContent = `Positive Number`;
// }

//NOTE - Assign #5
// var showData = document.querySelector(".data-square");
// var uValue_1 = window.prompt("Can You Enter a First Integer Value");
// var uValue_2 = window.prompt("Can You Enter a Second Integer Value");
// var uValue_3 = window.prompt("Can You Enter a Third Integer Value");
// var numChange_1 = Number(uValue_1);
// var numChange_2 = Number(uValue_2);
// var numChange_3 = Number(uValue_3);
// var maxNum = numChange_1;
// var minNum = numChange_1;
//checking and Max condition
// if (isNaN(numChange_1) || isNaN(numChange_2) || isNaN(numChange_3) ||!(Number.isInteger(numChange_1)) || !(Number.isInteger(numChange_2)) || !(Number.isInteger(numChange_3))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// }else if (numChange_2 > maxNum) {
//     maxNum = numChange_2;
// }else if (numChange_2 < maxNum) {
//     minNum = numChange_2;
// }
// Min condition
// if (numChange_3 > maxNum) {
//     maxNum = numChange_3;
// }else if (numChange_3 < maxNum) {
//     minNum = numChange_3;
// }
// showData.textContent = `Max : ${maxNum},  Min : ${minNum}`;
//NOTE - Assign #6
// var showData = document.querySelector(".data-square");
// var uValue = window.prompt("Can You Enter a Number Value");
// var numChange = Number(uValue);
// if (isNaN(numChange) || !(Number.isInteger(numChange))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// }else if (numChange % 2){
//     showData.textContent = ` =>${numChange} <= Is Odd Number`;
// }else {
//     showData.textContent = ` => ${numChange} <= Is Even Number`;
// }
//NOTE - Assign #7
// var showData = document.querySelector(".data-square");
// do {
// var uValue = window.prompt("Can You Enter a Number Value");
// if (!isNaN(uValue) || uValue.length > 1) {
//     alert("Please enter a One letter");
// }
// }while(!isNaN(uValue) || uValue.length > 1);
// switch (uValue) {
//     case "a":
//     case "e":
//     case "l":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "L":
//     case "O":
//     case "U":
//         showData.textContent = `You Enter :=> ${uValue} , it's a vowel`;
//         break;
//     default:
//         showData.textContent = `You Enter :=> ${uValue} , it's  a consonant`;
// }
//NOTE - Assign #8
// var showData = document.getElementById("inter-ul");
// showData.innerHTML = "";
// var uValue = window.prompt("Can You Enter a Number Value");
// var numChange = Number(uValue);
// if ((isNaN(numChange)) || !(Number.isInteger(numChange))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// } else {
// for (var i = 1; i <= numChange; i++) {
// showData.innerHTML += `<ul> <li> ${i} </li> </ul>`;
// }
// }
//NOTE - Assign #9
// var showData = document.querySelector(".data-square");
// var uValue = window.prompt("Can You Enter a Number Value");
// uValue=Number(uValue);
// if ((isNaN(uValue)) || !(Number.isInteger(uValue))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// }else{
//     for(var i = 1; i <= 12; i++) {
//         showData.innerHTML += `<ul> <li> ${i * uValue} </li> </ul>`;
    
//     }
// } 
//NOTE - Assign #10
// var showData = document.querySelector(".data-square");
// var uValue = window.prompt("Can You Enter a Number Value");
// uValue=Number(uValue);
// if ((isNaN(uValue)) || !(Number.isInteger(uValue))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// }else {
//     for(var i = 1; i <= uValue; i++) {
//             if(i % 2 == 0) {
//                 showData.innerHTML += `<ul> <li> ${i} </li> </ul>`;
//         }
//     }
// }
//NOTE - Assign #11
// var showData = document.querySelector(".data-square");
// var uValue_1 = Number(window.prompt("Can You Enter a First Integer Value "));
// var uValue_2 = Number(window.prompt("Can You Enter a Second Integer exponent "));
// if ((isNaN(uValue_1)) || !(Number.isInteger(uValue_1)) || (isNaN(uValue_2)) || !(Number.isInteger(uValue_2))) {
//     showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
// }else {

//     showData.innerHTML += uValue_1 ** uValue_2   ;
// }
//NOTE - Another example for Assign #11
// var uValue_1 = Number(window.prompt("Can You Enter a First Integer Value "));
// var uValue_2 = Number(window.prompt("Can You Enter a Second Integer exponent "));
// var res = 1;
// for(var i =0; i < uValue_2; i++) {
//     res *= uValue_1;
// }
// console.log(res);
//NOTE - Assign #12
// var showData = document.querySelector(".data-square");
// var chemist = Number(window.prompt("Enter Your Chemist Degree"));
// var biology = Number(window.prompt("Enter Your Biology Degree"));
// var archeology = Number(window.prompt("Enter Your archeology Degree"));
// var geology = Number(window.prompt("Enter Your Geology Degree"));
// var physics = Number(window.prompt("Enter Your Physics Degree"));
// var totalMarks = chemist + biology+ geology + archeology + physics ;
// if (
//     (isNaN(chemist)) 
//     || !(Number.isInteger(chemist)) 
//     || (isNaN(biology)) || !(Number.isInteger(biology))
//     || (isNaN(archeology)) ||!(Number.isInteger(archeology)) 
//     || (isNaN(geology)) ||!(Number.isInteger(geology))
//     ||(isNaN(physics)) ||!(Number.isInteger(physics))
//     )
    
//     {
//         showData.textContent = `Your Value it's not a number or You Enter a Float Number`;
//     }else{
//         showData.innerHTML = `
//         <p>Total Marks: ${totalMarks}</p>
//         <p> Average: ${totalMarks/5}</p>
//         <p>Percentage: ${(totalMarks/500)* 100}%</p>
        
//         `;
//     }

