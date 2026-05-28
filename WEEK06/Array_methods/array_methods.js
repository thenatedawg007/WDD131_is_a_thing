//1.javascript arrays
//              0        1             2          3
let  names = ["Nark", "Mathen", "Markthaniel","Nathark"];
console.log(names);

let grades = [1, 2 ,4, "Nathan"];

console.log(names[2]);

console.log(grades[2]);

console.log(grades);

//2.javascript objects
// own custom datatype
let studentName = "Brother Baldwin";
let studentClasses = ["WDD131", "CSE110"];
let studentGrades = [67, 88];

// this is a object
let bucket = {

    // key/value pairs
    contents:"paper",
    ideas:["stuff", "kiss a lamp", "eat the paper"],
    number_of_Ideas:[66, 92, 12]
}
// accessing object properties objectName.keyName
console.log(bucket.contents);

//3.Array methods
names.forEach((name)=> {
    // runs this function once for eery element in the array
    // one at a time
    console.log(name);

})

let newNames= names.map ((name)=>{
    return name + " Hatchley";
})

newNames.forEach((name)=> {
    // runs this function once for eery element in the array
    // one at a time
    console.log(name);

})

console.log(newNames)

//returns new array filtered by boolean
let filteredNames = names.filter((name) => {
    return name[0] === 'M';
})

console.log(filteredNames)

const numbers = [1, 2, 4];
const sum = numbers.reduce(function(total, num) {
    return total + num;
});
console.log(sum); // 7
 
// reduce - average
const avg = numbers.reduce(function(total, num) {
    return total + num;
}) / numbers.length;
console.log(avg); // 2.3333...
 
// filter - words longer than 5 characters
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longWords = words.filter(function(word) {
    return word.length > 5;
});
console.log(longWords); // Array(3)
 
// indexOf
const index = words.indexOf('apple');
console.log(index); // 2
// forEach - logs each item in the array
const list = ['one', 'two', 'three'];
list.forEach(function(item) {
    console.log(item);
});
 
// Students array
const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first: 'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
 
// map - create a new array of full names
const fullNames = students.map(function(student) {
    return `${student.first} ${student.last}`;
});
console.log(fullNames); // Array(3)

    const fullnamePrint = `
        <li>${fullname}<\li>
    
    `;


fullNames.forEach(function(name) {
    document.getElementById("student-list").innerHTML += fullnamesPrint;
});