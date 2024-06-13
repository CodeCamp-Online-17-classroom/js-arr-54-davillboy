// write code here
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let nameCount = {};
names.forEach(name => {
  let formattedName = name.toLowerCase(); // หรือ name.toUpperCase();
  nameCount[formattedName] = (nameCount[formattedName] || 0) + 1;
});

console.log(nameCount);

