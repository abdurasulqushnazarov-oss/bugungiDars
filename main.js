// 1-MASALA (Students grade & names)
function getNamesByGrade(students, grade) {
  return students
    .map((s) => {
      let g =
        s.percent >= 85 ? 5 : s.percent >= 70 ? 4 : s.percent >= 60 ? 3 : 2;
      return { ...s, grade: g };
    })
    .filter((s) => s.grade === grade)
    .map((s) => s.name);
}

//====================================================================================================

// 2-MASALA (Numbers squares)
const nums2 = [1, 2, 3, 4, 5];
const squares = nums2.map((n) => n * n);

//====================================================================================================

// 3-MASALA (Initials - GRRM)
const str3 = "George Raymond Richard Martin";
const initials = str3
  .split(" ")
  .map((w) => w[0])
  .join("");

//====================================================================================================

// 4-MASALA (Age difference - Sort)
const people4 = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];
people4.sort((a, b) => a.age - b.age);
const ageDiff = people4[people4.length - 1].age - people4[0].age;

//====================================================================================================

// 5-MASALA (Even and Odd filter)
const nums5 = [1, 2, 3, 4, 5, 6];
const evens = nums5.filter((n) => n % 2 === 0);
const odds = nums5.filter((n) => n % 2 !== 0);

//====================================================================================================

// 6-MASALA (Products sort by price)
let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
  { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
];
const sortByPrice = [...products].sort((a, b) => a.price - b.price);

//====================================================================================================

// 7-MASALA (Top rating product)
const topProduct = [...products].sort((a, b) => b.rating - a.rating)[0];

//====================================================================================================

// 8-MASALA (Cheapest product)
const cheapProduct = [...products].sort((a, b) => a.price - b.price)[0];

//====================================================================================================

// 9-MASALA (Only product names)
const pNames = products.map((p) => p.name);

//====================================================================================================

// 10-MASALA (Find product name by ID 5)
const nameId5 = products.find((p) => p.id === 5).name;

//====================================================================================================

// 11-MASALA (Delete product with ID 4)
const filteredProducts = products.filter((p) => p.id !== 4);

//====================================================================================================

// 12-MASALA (Check if string is only letters)
const str12 = "Abdulaziz";
const onlyLetters = str12
  .split("")
  .every((c) => c.toLowerCase() !== c.toUpperCase());

//====================================================================================================

// 13-MASALA (Truthy and Falsy filter)
const mixed13 = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
const res13 = {
  truthy: mixed13.filter((i) => !!i),
  falsy: mixed13.filter((i) => !i),
};

//====================================================================================================

// 14-MASALA (Word lengths array)
const text14 = "Men Abdulaziz Programmerman";
const lens14 = text14.split(" ").map((w) => w.length);

//====================================================================================================

// 15-MASALA (Check for space in string)
const hasSpace = text14.split("").some((c) => c === " ");

//====================================================================================================

// 16-MASALA (Object entries to string sum)
const obj16 = { a: 2, b: 5, c: 7 };
const res16 = Object.entries(obj16).map((e) => e.join(""));

//====================================================================================================

// 17-MASALA (Digit sum - Recursion)
function digitSum(n) {
  if (n === 0) return 0;
  return (n % 10) + digitSum(Math.floor(n / 10));
}

//====================================================================================================

// 18-MASALA (Add grade property)
const pupils18 = [
  { name: "Elbek", protcent: 95 },
  { name: "Zafar", protcent: 78 },
];
const graded18 = pupils18.map((p) => ({
  ...p,
  grade: p.protcent >= 90 ? 5 : p.protcent >= 80 ? 4 : p.protcent >= 70 ? 3 : 2,
}));

//====================================================================================================

// 19-MASALA (Add isPassed property)
const passed19 = pupils18.map((p) => ({ ...p, isPassed: p.protcent >= 70 }));
