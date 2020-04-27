/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let result = '';
if (str.length > maxlength){
   result = str.substring(0, maxlength - 1) + "…";
} else {
  result = str;
}
return result;
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)
