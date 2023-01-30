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
const mas1 = [2, 3, 5, 8];
let result1 = 1;
for (let i = 0; i < mas1.length; i++) {
  result1 = result1 * mas1[i];
}
console.log(result1);
const mas2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas2.length; i++) {
  if (mas2[i] > 5 && mas2[i] < 10) console.log(mas2[i]);
}
const mas3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < mas3.length; i++) {
  if (i % 2 === 0) console.log(mas3[i]);
}
//______________lesson-3___________________
function palindrome(world) {
  let str = '';
  for (let i = world.length - 1; i >= 0; --i) {
    str += world[i];
  }
  return world === str;
}
//________________________
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
//________________________
const a = 2;
const b = 52;
const min1 = a < b ? a : b;
//________________________
function max(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}
//________________________
const c = 42;
const y = 52;
const max1 = c > y ? c : y;
//________________________
const mas4 = [1, 10, 15, 20, 45, 50, 90, 2, 88, 100];
function zero(mas4) {
  return mas4.toString().replace(new RegExp('0', 'g'), 'zero');
}

console.log(zero(mas4));
