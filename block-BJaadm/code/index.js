let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map((person) => person.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => person.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopelName.filter((name) => name.startsWith('J') || name.startsWith('P')));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C' 
console.log(peopelName.filter((name) => name.startsWith('A') || name.startsWith('C')).length)
// Log all the filtered male ('M') in persons array
let male = persons.filter((person) => person.sex === "M" );
console.log(male);
// Log all the filtered female ('F') in persons array
let female = persons.filter((person) => person.sex === "F");
console.log(female);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let nameStart = persons.filter((person) => {
  if (person.sex === "F") {
    if (person.name.startsWith('J') || person.name.startsWith('P')) {
      console.log(person.name);
    }
  }
});
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((num) => num % 2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith('J')));                                 
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith('P')));  
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let findFirstName =  persons.filter((person) => person.name.startsWith('J') && person.grade > 10 && person.sex == "F");
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex == "M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc += cv;
  return acc;
},0);
// Find the average grade
let average = peopleGrade.reduce((acc, cv) => {
  acc += cv;
  return acc;
}, 0) / peopleGrade.length;
console.log(average);
// Find the average grade of male
let averageMaleGrade = male.reduce((acc, cv) =>{
  acc += cv.grade;
  return acc;
},0) / male.length;
// Find the average grade of female
let averageFemaleGrade = female.reduce((acc, cv) =>{
  acc += cv.grade;
  return acc;
},0) / female.length;
// Find the highest grade

let highestGrade = [...peopleGrade].sort((a, b) =>  a - b).pop();
// Find the highest grade in male
let maleGrade = male.map((person) => person.grade);
let highestMaleGrade = maleGrade.sort((a, b) => a - b).pop();
// Find the highest grade in female
let femaleGrade = female.map((person) => person.grade);
let highestFemaleGrade =femaleGrade.sort((a, b) => a - b).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let peopleNameWithJorP = persons.filter((person) => person.name.startsWith('J') ||person.name.startsWith('P'));
let gradeWithJorP = peopleNameWithJorP.map((person) => person.grade);
let highestGradeWithJorP = [...gradeWithJorP].sort((a, b) => a - b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log([peopleGrade].sort((a, b) => a - b));
// Sort the peopleGrade in descending order
console.log([peopleGrade].sort((a, b) =>  b - a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) =>  b - a));
// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopelName].sort();