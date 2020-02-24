/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//   Например:
// ucFirst('вася') === 'Вася';
// Обратите внимание, что функция также должна работать со строкой:
//   содержащей только один символ 'В'
//  не содержащей символы ''
function ucFirst(str) {
  if (!str) return str;
  var result;

     result =  str[0].toUpperCase() +  str.substr(1);

    return result;
}
