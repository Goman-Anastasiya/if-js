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
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (i % 2 === 0) {
    console.log(arr3[i]);
  }
}

//______________lesson-3___________________
function palindrome(world) {
  let str = '';
  for (let i = world.length - 1; i >= 0; --i) {
    str += world[i];
  }
  return world === str;
}

const p = (world) => {
  let str = '';
  for (let i = world.length - 1; i >= 0; --i) {
    str += world[i];
  }
  return world === str;
};

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

const m = (a, b) => (a < b ? a : b);

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

const m1 = (c, y) => (c > y ? c : y);
//________________________
const arr4 = [1, 10, 15, 20, 45, 50, 90, 2, 88, 100];

function zero(arr4) {
  return arr4.toString().replace(new RegExp('0', 'g'), 'zero').split();
}

const z = (arr4) => {
  return arr4.toString().replace(new RegExp('0', 'g'), 'zero').split();
};
console.log(palindrome(),p(),m(),m1(),min(),min1,max1,max(),z(),zero(arr4));