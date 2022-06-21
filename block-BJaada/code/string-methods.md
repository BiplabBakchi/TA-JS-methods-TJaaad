Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - Parameter: No parameter
  - Return:Convert the string to uppercase(string data type)
  - Example:
     ```js
     let sentence ='How are you?';
     sentence.toUpperCase(); //'HOW ARE YOU?'
     let text = 'A quick brown fox jumped over a lazy dog';text.toUpperCase(); //'THE QUICK BROWN FOX JUMPS OVERTHE LAZY DOG.' 
    let hobby = 'Play badminton and listen to music';
    hobby.toUpperCase(); // 'PLAY BADMINTON AND LISTEN TO MUSIC'
     ```
    -`toUpperCase` returns the value of the string converted to uppercase.
3. `toLowerCase`
  - Parameter: No parameter
  - Return:Convert the string to lowecase(string data type)
  - Example:
     ```js
    let sentence = 'HOW ARE YOU?';
    sentence.toUpperCase(); //'how are you?'
    let text = 'A quick brown fox jumped over a lazy dog'; text.toLocaleLowerCase();//'the quick brown fox jumps over the lazy dog.'
    let hobby = 'Play badminton and listen to music';
    hobby.toLocaleLowerCase();// 'play badminton and listen to music'
     ```
    - `toLowerCase` returns the value of the string converted to lowercase.
4. `trim`
  - Parameter: No parameter
  - Return: A new string without any whitespace from both the end that is beginning and end.(string data type)
  - Example:
     ```js
    let message = '   Hello world!    ';
    message.trim(); // 'Hello world!'
    let wish = '      Happy new year  ';
    wish.trim(); // 'Happy new year'
    let text = ' Journey Begins            ';
    text.trim(); // 'Journey Begins'
     ```
  -`trim` removes whitespace from both ends of a string and returns a new string, without modifying the original string.
5. `trimEnd`
  - Parameter: No parameter
  - Return: A new string without any whitespace from the end (string data type)
  - Example:
     ```js
    let message = '   Hello world!    ';
    message.trimEnd(); // '   Hello world!'
    let wish = '      Happy new year  ';
    wish.trimEnd(); // '      Happy new year'
    let text = ' Journey Begins            ';
    text.trimEnd(); // ' Journey Begins'
     ```
  -`trimEnd` removes whitespace from ends of a string and returns a new string, without modifying the original string.
6. `trimStart`
  - Parameter: No parameter
  - Return: A new string without any whitespace from the start (string data type)
  - Example:
     ```js
    let message = '   Hello world!    ';
    message.trimStart(); //'Hello world!    '
    let wish = '      Happy new year  ';
    wish.trimStart(); // 'Happy new year  '
    let text = ' Journey Begins            ';
    text.trimStart(); // 'Journey Begins            '
     ```
  -`trimStar` removes whitespace from Start of a string and returns a new string, without modifying the original string.
7. `concat`
   - Parameter: strings (string data type)
   -Return: New string after concatenation of the strings provided
  - Example:
  ```js
  let str1 = 'Hello';
  let str2 = 'World';
  str1.concat(" ", str2); // 'Hello World'
  let msg = 'Hi';
  msg.concat(' ', 'how are you?'); // 'Hi how are you?'
  let book = 'Wings of fire';
  book.concat(' ', 'is one of the best inspirational book '); // 'Wings of fire is one of the best inspirational book '
  - `concat` concatenates the string argument and returns a new string
  ``` 
8. `endsWith`
   -Parameter: -search string (string data type)
               -length (number data type)
   -Return: true or false
   -Example: 
   ```js
   let text = 'A quick brown fox jumped over a lazy dog';
   text.endsWith('g'); // true
   let msg = "Hello"; 
   msg.endsWith("lo"); // true
   let sentence = 'Tiger lives in the jungle and hunts for living';
   sentence.endsWith('living'); // true
   -`endsWith` Determines whether string ends with the character of specified string returning true or false.
   ```
9. `includes`
  -Parameter: -search string (string data type)
              -postion (number data type)
  -Return: true or false
  -Example:
  ```js
  let sentence = 'John is a animal lover';
  sentence.includes('John'); // true
  let habit = 'Reading books  before sleeping is a good habit';
  habit.includes('books'); // true
  let info = 'Lion is the king of the jungle';
  info.includes('Lion'); // true
  ```
  - `includes` It searches for the string described and returns true or false accordingly.
10. `indexOf`
   -Parameter: search string (string data type)
               -postion(number data type)
   -Return:index of the serched string by default it is -1
   -Example:
   ```js
   let para = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
   para.indexOf('jumps'); // 20
   let info = 'Lion is the king of the jungle';
   info.indexOf('king'); // 12

   let searchTerm = 'animal';
   let msg1 = 'Tiger is the national animal of india';
   msg1.indexOf(searchTerm); // 22 
   ``` 
   -`indexof` Searches for string and returns the index of the string 
11. `lastIndexOf`
   -Parameter: searchString (string data type)
   -Return: last index of the specified value in the string or -1 if not found
   -Example:
   ```js
   let para = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
   para.lastIndexOf('dog'); // 52
   let aboutLion = 'Lion is a carnivores animal.Lion is the king of the jungle';
   aboutLion.lastIndexOf('the'); // 48
  
   let aboutTiger = 'Tiger is a carnivores animal. Tiger lives in the jungle Tiger is the national animal of india';
   aboutTiger.lastIndexOf('Tiger'); // 56
  - `lastIndexOf` Searches for the last index of the specified value in the string and returns the index. 
12. `padEnd`
   -Parameter: number and string
   -Return: String up to the specified targeted length from the end
   -Example:
   ```js
   let msg1 = 'Hello World';
   msg1.padEnd('24'); // 'Hello World!            '
   let msg2 = '500';
   msg2.padEnd('10', '0'); // '5000000000'
   let msg3 = 'Dream to change into reality';
   msg3.padEnd('30', 'y'); // 'Dream to change into realityyy'
   ```
   -`padEnd` pads current string at the end of the string with another specified string till it reaches the given length 
13. `padStart`
   -Parameter: -targetLength (number data type)
               -padString (string data type)
   -Return:String up to the specified targeted length from the start
   -Example:
   ```js
   let msg1 = 'hello world';
  msg1.padStart('15', 'h'); // 'hhhhhello world'
  let msg2 = '500';
  msg2.padStart('10', '0'); // '0000000500'
  let msg3 = '768';
  msg3.padStart('13', '3'); // '3333333333768'
   ```
   -`padStart` pads current string at the start of the string with another specified string till it reaches the given length 
14. `repeat`
   -Parameter: count (number data type)
   -Return: new string with the specified changes with specified count
   -Example:
   ```js
     let chorus = 'happy';
     chorus.repeat(3); // 'happyhappyhappy'
     let nums = '123456';
     nums.repeat(2);// '123456123456'
     let chorus1 = 'hello';
     chorus1.repeat(5); // 'hellohellohellohellohello'
   ```
    -`repeat` Returns a new string which contains the specified numbers of copies of the string that is specified
15. `replace`
   -Parameter: String (string data type)
   -Return: New string after the changes
   -Example:
   ```js
   let msg1 = 'Happy Christmas';
   msg1.replace('Happy', 'Enjoy'); // 'Enjoy Christmas'
   let msg2 = 'Lion is a carnivorous animal';
   msg2.replace('Lion', 'Tiger'); // 'Tiger is a carnivorous animal'
   let msg3 = 'John is a fighter';
   msg3.replace('fighter', 'dancer'); // 'John is a dancer'
   ```
   -`replace` Returns new string after replacing some parts or the whole part of a string 
16. `slice`
   -Parameter: -beginIndex (number data type)
               -endIndex (number data type)
   -Return: new section of a string as a new string
   -Example:
   ```js
   let para = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
   para.slice(40); // 'dog. If the dog barked, was it really lazy?'
   let aboutLion = 'Lion is a carnivores animal.Lion is the king of the jungle';
   aboutLion.slice(28); // 'Lion is the king of the jungle'
   let aboutTiger = 'Tiger is a carnivores animal. Tiger lives in the jungle Tiger is the national animal of india';
    aboutTiger.slice(5, 40); // ' is a carnivores animal. Tiger live'
   ```
   -`slice` Extracts a section of a string and returns it as a new string
17. `split`
   -Parameter: -separator (string data type)
               -limit (number data type)
   -Return:
   -Example:
   ```js
    let text1 = 'A quick brown fox jumped over a lazy dog';
    text1.split(' '); // ['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy', 'dog']
    let text2 = 'Hello John'; 
    text2.split('');// ['H', 'e', 'l', 'l', 'o', ' ', 'J', 'o', 'h', 'n']
    let text3 = 'Arya killed Knigt king with her dagger';
    text3.split(' ', 7); // ['Arya', 'killed', 'Knigt', 'king', 'with', 'her', 'dagger']
   ```
18. `substring`
   -Parameter:indexStart (Number data type)
              indexEnd (Number data type)
   -Return: New string containing specified part of the given string
   -Example:
   ```js
   let msg1 = 'Happy Christmas';
   msg1.substring(1, 3); // 'ap'
   let msg2 = 'Hello World';
   msg2.substring(1,7); // 'ello W'
   let msg3 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
   msg3.substring(0,70); // 'The quick brown fox jumps over the lazy dog. If the dog barked, was it'
   ```
   -`substring` It returns tha part of the string between the start and end indexes
