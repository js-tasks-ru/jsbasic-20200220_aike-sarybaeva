/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

// Необходимо, чтобы на сайте можно было поприветствовать только пользователей,
//   которые удовлетворяют следующему условию – имя не пустое, без пробелов, минимум 4 символа.

function isValid(name) {
var success  = false;
// if(name && name.replace(/\s+/g,'') && name.length > 3) {
  if(name && name.split(' ').length-1 == 0 && name.length > 3) {
  success = true;
} else {
    success = false;
  }
return success;
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
