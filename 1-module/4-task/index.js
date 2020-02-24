/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

// Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.
//
//   Функция должна быть нечувствительна к регистру:
// checkSpam('1XbeT now') === true
// checkSpam('free xxxxx') === true
// checkSpam('innocent rabbit') === false
function checkSpam(str) {
  var result;
  // var str = "innocent rabbit";
  str = str.toLocaleUpperCase();

    if ( str && ( str.match("1xBet".toLocaleUpperCase()) != null || str.match("XXX".toLocaleUpperCase()) != null)){
    result = true;
  }
else{
  result = false;
  }

return result;
}
