/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */




function showSalary(data, age) {
  // data = []; age = 40;
  // data.push({
  //   "balance": "$1,825.65",
  //   "picture": "http://placehold.it/32x32",
  //   "age": 21,
  //   "name": "Golden Branch",
  //   "gender": "male",
  //   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  //   "favoriteFruit": "banana"
  // });
  // data.push({
  //   "balance": "$1,490.15",
  //   "picture": "http://placehold.it/32x32",
  //   "age": 21,
  //   "name": "Duncan Randall",
  //   "gender": "male",
  //   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  //   "favoriteFruit": "banana"
  // });

  let result = data.filter(item => item.age <= age);
  let res2 = result.map(item => `${item.name}, ${item.balance}`);
  return res2.join("\n");
  }
