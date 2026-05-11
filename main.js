//1-MASALA
function getNamesByGrade(students, grade) {
  return students
    .filter((s) => {
      if (grade === 5) return s.percent >= 85 && s.percent <= 100;
      if (grade === 4) return s.percent >= 70 && s.percent < 85;
      if (grade === 3) return s.percent >= 60 && s.percent < 70;
    })
    .map((s) => s.name);
}
//===========================================================================================
//2-MASALA
const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];
let animalCounts = {};
for (let animal of animals) {
  animalCounts[animal] = (animalCounts[animal] || 0) + 1;
}
//===========================================================================================
//3-MASALA
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n ** 2);
//===========================================================================================
//4-MASALA
const nums = [1, -4, 12, 0, -3, 29, -150];
let positiveSum = 0;
nums.filter((n) => n > 0).forEach((n) => (positiveSum += n));
//===========================================================================================
//5-MASALA
const fullName = "George Raymond Richard Martin";
const initials = fullName
  .split(" ")
  .map((word) => word[0])
  .join("");
//===========================================================================================
//6-MASALA
const people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];
people.sort((a, b) => a.age - b.age);
const ageDiff = people[people.length - 1].age - people[0].age;
//===========================================================================================
//7-MASALA
const nElements = [1, 2, 3, 4, 5, 6];
const evens = nElements.filter((n) => n % 2 === 0);
const odds = nElements.filter((n) => n % 2 !== 0);
//=====================
//8-MASALA
const dups = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
for (let item of dups) {
  if (!unique.includes(item)) unique.push(item);
}
//=====================
//9-MASALA
let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
  { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
];
const sortByPrice = [...products].sort((a, b) => a.price - b.price);
//=====================
//10-MASALA
const topRated = [...products].sort((a, b) => b.rating - a.rating)[0];
//=====================
//11-MASALA
const cheapest = [...products].sort((a, b) => a.price - b.price)[0];
//===========================================================================================
//12-MASALA
let totalSum = 0;
products.forEach((p) => (totalSum += p.price));
//=====================
//13-MASALA======================================================================
const productNames = products.map((p) => p.name);
//===========================================================================================
//14-MASALA
const findId5 = products.find((p) => p.id === 5).name;
//===========================================================================================
//15-MASALA
const withoutId4 = products.filter((p) => p.id !== 4);
//===========================================================================================
//16-MASALA
const str = "Abdulaziz";
const isAllLetters = str
  .split("")
  .every((char) => char.toLowerCase() !== char.toUpperCase());
//===========================================================================================
//17-MASALA
const mixed = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
const getTruthyFalsy = {
  truthy: mixed.filter((item) => !!item),
  falsy: mixed.filter((item) => !item),
};
//===========================================================================================
//18-MASALA
const text = "Men Abdulaziz Programmerman";
const wordLengths = text.split(" ").map((word) => word.length);
//===========================================================================================
//19-MASALA
const hasSpace = text.split("").some((char) => char === " ");
//===========================================================================================
//20-MASALA
const obj = { a: 2, b: 5, c: 7 };
const objResult = Object.entries(obj).map((entry) => entry.join(""));
//===========================================================================================
