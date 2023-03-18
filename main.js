let user = 'Jonh Doe';
console.log(user);
const student = 'Anastasiya';
console.log(student);
user = student;
console.log(user); //выведет значение переменной student

let test = 1;
test++;
console.log(test);
test += '1';
console.log(test); // 21
test--;
console.log(test); //20
console.log(!!test); //true

const arr1 = [2, 3, 5, 8];
let result1 = 1;
for (let i = 0; i < arr1.length; i++) {
  result1 = result1 * arr1[i];
}
console.log(result1);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) console.log(arr2[i]);
}

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (i % 2 === 0) console.log(arr3[i]);
}
