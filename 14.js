//#1
// let age = parseInt(prompt("Ваш возраст:"));

// alert(canPurchaseAlcohol(age));

// function canPurchaseAlcohol(age) {
//     return age >= 21 ? true : confirm("Вам уже исполнилось 21 год?");
// }

let age = parseInt(prompt("Ваш возраст:"));

alert(canPurchaseAlcohol(age));

function canPurchaseAlcohol(age) {
    return age >= 21 || confirm("Вам уже исполнилось 21 год?");
}

//#2

function max(a, b) {
    return (a > b) ? a : b;
  }
  alert(max(2, 50));

//#3

  const colorCode = +prompt('code of color (1-red, 2-blue, 3-green)', '');
switch (colorCode) {
  case 1:
    alert('red');
    break;
  case 2:
    alert('blue');
    break;
  case 3:
    alert('green');
    break;
  default:
    alert('nothing');
}

//#4
function sumToFor(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  alert(sumToFor(5));
  
//   function sumToWhile(n) {
//     let sum = 0;
//     let i = 1;
//     while (i <= n) {
//       sum += i;
//       i++;
//     }
//     return sum;
//   }
//   alert(sumToWhile(4));
  
//   function sumToDoWhile(n) {
//     let sum = 0;
//     let i = 1;
//     do {
//       sum += i;
//       i++;
//     } while (i <= n);
//     return sum;
//   }
//   alert(sumToDoWhile(3));

//#5
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  alert(reverseString('hello'));