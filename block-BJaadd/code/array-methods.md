Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
  - Parameter:seperator (specifies a string)
  - Return:A string with all the elements joined together 
  - Example:
  ```js
  let elements = ['Fire', 'Air', 'Water'];
  elements.join(', '); // 'Fire, Air, Water'
  let colors = ['Green', 'Orange', 'Red', 'Yellow', 'Blue'];
  colors.join(' + '); // 'Green + Orange + Red + Yellow + Blue'
  let shapes = ['Square', 'Rectangle', 'Circle', 'Triangle', 'Oval'];
  shapes.join(''); // 'SquareRectangleCircleTriangleOval'
  ```
  - `join` Creates and returns a new string by concatenating all the elements in an array seperated by commas or any specified character
3. `flat`
 - Parameter: Depth (accepts a number defaults to 1) 
  - Return: A new array with the sub-array elements concatenated into it.
  - Example:
  ```js
  let arr1 = [1, 2, [3, 4]];
  arr1.flat(); // [1, 2, 3, 4]
  let nums = [1, 2, [3, 4, [5, 6]]];
  nums.flat(2); // [1, 2, 3, 4, 5, 6]
  let arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  arr3.flat(3); // [1, 2, 3, 4, 5, 6, 7, 8, Array(2)]
  ```
  - `flat` Creates a new array with all the sub-array concatenated up to the specified depth.
4. `push`
  - Parameter:  n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
  - Return: new array including the added elements
  - Example:
  ```js
  let games = ['Football', 'Cricket', 'Golf', 'Badminton'];
  games.push('Carrom');//  ['Football', 'Cricket', 'Golf', 'Badminton', 'Carrom']
  let colors = ['Green', 'Orange', 'Red', 'Yellow', 'Blue'];
  colors.push('Purple', 'Black', 'White'); // ['Green', 'Orange', 'Red', 'Yellow', 'Blue', 'Purple', 'Black', 'White']
  let animals = ['pigs', 'goats', 'sheep'];
  colors.push('tiger', 'elephant'); // ['pigs', 'goats', 'sheep']
  ```
5. `indexOf`
  - Parameter: search element (num ,string)
            - form index (number data type)
  - Return: index of the element in the array, if not found -1 is returned
  - Example:
  ```js
  let num = [1, 2 , 3 , 4 , 6, 11, 12, 24 , 20];
  num.indexOf(12); // 6
  let animals = ['tiger', 'elephant', 'pigs', 'goats', 'sheep'];
  animals.indexOf('sheep', 1); // 4
  let birds = ['sparrow', 'pigeon', 'peacock', 'parrot', 'owl'];
  birds.indexOf('peacock', 0); // 2
  ```
  - `indexOf` compares search element in the array and returns the index of the searched element when matched,  if not found returns -1
6. `lastIndexOf`
  - Parameter: search element 
  - Return: the last index of the element in the array , -1 if not found
  - Example:
  ```js
   let animals = ['tiger', 'elephant', 'pigs', 'goats', 'sheep', 'tiger'];
   animals.lastIndexOf('tiger'); // 5
   let birds = ['sparrow', 'peacock', 'pigeon', 'peacock', 'parrot', 'owl', 'peacock'];
   birds.lastIndexOf('peacock'); // 6
   let num = [1, 2, 3, 2, 3 , 4 , 6, 11, 2, 12, 24 , 20, 2, 13 , 14];
   num.lastIndexOf(2, 11); // 8 
  ```
  - `lastIndexOf` compares search element in the array and returns the last index of the searched element when matched, if not found returns -1
7. `includes`
  - Parameter: - search element (number data type, string data type)
               - from index(number data type)
  - Return: true or false
  - Example:
  ```js
   let animals = ['tiger', 'elephant', 'pigs', 'goats', 'sheep'];
   animals.includes('tiger', 3); // false
   let num = [1, 2, 3, 4 , 5 , 6, 7, 8, 9];
   num.includes(5);// true
   let colors = ['Green', 'Purple', 'Orange', 'Red', 'Yellow', 'Blue'];
  colors.includes('Purple', 0); // true
  ```
  - `includes` Returns true and false according to the serched element is found in the array or not, it also accepts position in the array to begin the search of the element
8. `reverse`
  - Parameter: No parameter
  - Return: The reversed value
  - Example:
  ```js
  let animals = ['tiger', 'elephant', 'pigs', 'goats', 'sheep'];
  animals.reverse(); //  ['sheep', 'goats', 'pigs', 'elephant', 'tiger']
  let num = [1, 2, 3, 4 , 5 , 6, 7, 8, 9];
  num.reverse(); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
  let fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange', 'Blue berry'];
  fruits.reverse(); // ['Blue berry', 'Orange', 'Papaya', 'Grapes', 'Banana', 'Apple', 'Mango']
  ```
  - `reverse` Revereses the array and returns a new array
9. `every`
- Parameter: -call back funtion 
             - element 
             - index
             - array
             -thisArg
  - Return: true if the callbackFn function returns a truthy value for each and every element in the array otherwise fase
  - Example:
  ```js
  let isBelow10 = (num) => num < 10;
  let num = [1, 2, 3, 4 , 5 , 6, 7, 8, 9];
  num.every(isBelow10); // true
  let isBelow100 = (num) => num < 100;
  let num = [90, 20, 35, 55 , 45 , 56, 77, 48, 99, 109];
  num.every(isBelow100); // false
  let price = [5001, 9000, 20000, 15000, 7000, 5507];
  let priceAbove5000 = (price) => price > 5000; 
  price.every(priceAbove5000);
  ```
  - `every` Returns true and false after checking each element pass the test implemented by the provided function.
10. `shift`
- Parameter: No parameter
  - Return: The removed element from the array, undefined if the array is empty
  - Example:
  ```js
  let num = [1, 2, 3, 4 , 5 , 6, 7, 8, 9];
  num.shift();// 1
  let fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange', 'Blue berry'];
  fruits.shift(); // 'Mango'
  let flowers = ['Rose', 'Lotus', 'Jasmine', 'Lily'];
  flowers.shift(); // 'Rose'
  ```
  - `shift` Removes element from the zeroeth index and lowers the index of the other element. If the length property is 0, undefined is returned.
11. `splice`
- Parameter: - Start (number data type)
             - Delete element (number data type)
             - Item (string data type)
  - Return:
  - Example:
  ```js
  let  months = ['Jan', 'March', 'April', 'June'];
  months.splice(1); //['Jan']
  let fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange', 'Blue berry'];
  fruits.splice(1, 4, 'Lemon'); // ['Mango', 'Lemon', 'Orange', 'Blue berry']
  let flowers = ['Rose', 'Lotus', 'Jasmine', 'Lily'];
  flowers.splice(2, 2, 'Mangolia'); // ['Rose', 'Lotus', 'Mangolia']
  ```
  - `splice` Changes the contents of an array by removing or replacing by existing or adding new elements in place
12. `find`
- Parameter: -callbackFn
             -element
             -index
             -array
             -thisArg
  - Return: First element of the array that satisfies the provided the testing function else undefined
  - Example:
  ```js
  let num = [1, 2, 3, 4 , 5 , 6, 7, 8, 9, 20, 40, 45];
  let found = num.find(element => element > 20); // 12
  let isGreater12 = function (num) {
    return num > 12
  }
  num.find(isGreater12); // 20
  let fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange', 'Blue berry'];
  let favFruit = function(fruits) {
    return fruits === 'Apple';
  }
  fruits.find(favFruit); // 'Apple'
  ```
  - `find` Finds the element described in the function when called else returns undefined if not found
13. `unshift`
- Parameter: elements (string data type, number data type)
  - Return: New array with new elements added 
  - Example:
  ```js
  let arr1 =  [1, 2, 3, 4 , 5 , 6, 7, 8, 9, 10];
  arr1.unshift(11, 12); // [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange'];
  fruits.unshift('Blue berry');//['Blue berry', 'Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange']
  let festivals = ['Diwali', 'Dusshera', 'Christmas', 'Holi'];
  festivals.unshift('Id');// ['Id', 'Diwali', 'Dusshera', 'Christmas', 'Holi']
  ```
  - `unshift` Adds one or more elements to the beginning of an array and returns the new length of the array.
14. `findIndex`
- Parameter: 
  - Return: 
  - Example:
  ```js
  let num = [1, 2, 3, 4 , 5 , 6, 7, 8, 9, 20, 40, 45];
  let found = num.findIndex(element => element > 20); // 10
  let num = [2, 20, 23, 24, 30, 38, 40]
  let isGreater30 = function (num) {
    return num > 30
  }
  num.findIndex(isGreater30); // 5
  let fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange', 'Blue berry'];
  let favFruit = function(fruits) {
    return fruits === 'Apple';
  }
  fruits.findIndex(favFruit); // 1
  ```
  
15. `filter`
- Parameter: - element 
             - callbackFn 
             - index 
             - array 
             - thisArg
  - Return: New array after passing the test defined in the function. If no elements pass the test, an empty array will be returned.
  - Example:
  ```js
  let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  let filterWords = function(word) {
    return word.length > 6
  }
  words.filter(filterWords);
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let isEven =function(num) {
    return num % 2 === 0;
  }
  num.filter(isEven); // [2, 4, 6, 8, 10, 12]
  let num = [12, 21, 23, 54, 55, 26, 17, 81, 91, 101, 111, 102, 123];
  let isOdd =function(num) {
    return num % 2 !== 0;
  }
  num.filter(isOdd); // [21, 23, 55, 17, 81, 91, 101, 111, 123]
  ```
  - `filter` After filtering creates a new array with all the elements that pass the test described in the function
16. `flat`
- Parameter:
  - Return:
  - Example:
  ```js
  ```
17. `forEach`
  - Parameter: - callbackFn
               - element
               - index
               - array
               - thisArg
  - Return: undefined
  - Example:
  ```js
  let characters = ['a', 'b', 'c', 'd' , 'f', 'e', 'f', 'g', 'h', 'g'];
  characters.forEach(element => console.log(element) );
  let price = [2000, 3000, 3440, 7000];
  price.forEach((price) => console.log(price));
  let fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Papaya', 'Orange', 'Blue berry'];
  let basketOfFruits = [];
  fruits.forEach((fruit) => {
    basketOfFruits.push(fruit)
  })
  ```
18. `map`
  - Parameter:
  - Return:
  - Example:
  ```js
  ```
19. `pop`
  - Parameter: No parameter
  - Return: The removed element from the array
  - Example:
  ```js
  let animals = ['Lion', 'Tiger', 'Cheetah', 'Deer', 'Rabbit'];
  animals.pop(); //'Rabbit'
  let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  words.pop(); // 'present'
  let numbers = [1, 2, 3, 4 , 5 , 6, 7, 8, 9, 20, 40, 45];
  numbers.pop();// 45

  
  ```
20. `reduce`
  - Parameter:
  - Return:
  - Example:
  ```js
  ```
21. `slice`
  - Parameter:
  - Return:
  - Example:
  ```js
  ```
22. `some`
  - Parameter:
  - Return:
  - Example:
  ```js
  ```

