//PART 1
//1
function double(a) {
    return a * 2;
}
//2
function triple(a) {
    return a * 3;
}
//3
const square = a => a*a;
//4
const increment = a => a+1;
//5
function mapThis(arr, mapFunc) {
    return arr.map(mapFunc)
}
//6
function updateEach(arr, mapFunc) {
    arr.forEach((a, i) => arr[i] = mapFunc(a))
}

//given code
const numbers = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const nums = [2, -30, 50, 20, -12, -9, 7];
const people = [
    {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
    },
    {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
    },
    {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
    },
    {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
    },
    {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
    },
];

//PART 2
//7
const youngPeople = people
.filter(person => person.age <= 25)
.map(person => ({
    name: `${person.firstName} ${person.lastName}`,
    email: person.email
}));

//8
positiveSum = 0;
nums.forEach(value => {positiveSum += value > 0 ? value : 0})



//given tests
console.log(mapThis(numbers, double)); 
console.log(mapThis([1,2,3], double)); 
console.log(mapThis([5,10,5], triple)); 
console.log(mapThis([1,2], square));   
 
myarray = [2,3,4];
updateEach(myarray, increment);
console.log(myarray); 
updateEach(myarray, square);
console.log(myarray); 
  
updateEach(numbers,triple);
console.log(numbers); 
  
console.log(youngPeople);
  
console.log(positiveSum);