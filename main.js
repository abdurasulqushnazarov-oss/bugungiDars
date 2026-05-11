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
//=================================================================================
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
  if (animalCounts[animal]) {
    animalCounts[animal]++;
  } else {
    animalCounts[animal] = 1;
  }
}
//=================================================================================
//3-MASALA
const nums3 = [1, 2, 3, 4, 5];
const squares = nums3.map((n) => n * n);
//=================================================================================
//4-MASALA
const nums4 = [1, -4, 12, 0, -3, 29, -150];
let positiveSum = 0;
nums4
  .filter((n) => n > 0)
  .forEach((n) => {
    positiveSum += n;
  });
//=================================================================================
//5-MASALA
const fullName = "George Raymond Richard Martin";
const initials = fullName
  .split(" ")
  .map((word) => word[0])
  .join("");
//=================================================================================
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
//=================================================================================
//7-MASALA
const nElements = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = nElements.filter((n) => n % 2 === 0);
const odds = nElements.filter((n) => n % 2 !== 0);
//=================================================================================
//8-MASALA
const dups = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
dups.forEach((item) => {
  if (!unique.includes(item)) {
    unique.push(item);
  }
});
//=================================================================================
//9-MASALA
let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
  { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
];
products.sort((a, b) => a.price - b.price);
//=================================================================================
//10-MASALA
products.sort((a, b) => b.rating - a.rating);
const topProduct = products[0];
//=================================================================================
//11-MASALA
products.sort((a, b) => a.price - b.price);
const cheapestProduct = products[0];
//=================================================================================
//12-MASALA
let totalSum = 0;
products.forEach((p) => {
  totalSum += p.price;
});
//=================================================================================
//13-MASALA
const pNames = products.map((p) => p.name);
//=================================================================================
//14-MASALA
const product5 = products.find((p) => p.id === 5);
const name5 = product5 ? product5.name : "Topilmadi";
//=================================================================================
//15-MASALA
products = products.filter((p) => p.id !== 4);
//=================================================================================
//16-MASALA
const str16 = "Abdulaziz";
const isOnlyLetters = str16.split("").every((char) => {
  return char.toLowerCase() !== char.toUpperCase();
});
//=================================================================================
//17-MASALA
const mixed = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
const truthy = mixed.filter((item) => item);
const falsy = mixed.filter((item) => !item);
const result17 = { truthy: truthy, falsy: falsy };
//=================================================================================
//18-MASALA
const text18 = "Men Abdulaziz Programmerman";
const lengths = text18.split(" ").map((word) => word.length);
//=================================================================================
//19-MASALA
const hasSpace = text18.split("").some((char) => char === " ");
//=================================================================================
//20-MASALA
const obj20 = { a: 2, b: 5, c: 7 };
const res20 = Object.entries(obj20).map((item) => item.join(""));
//=================================================================================
