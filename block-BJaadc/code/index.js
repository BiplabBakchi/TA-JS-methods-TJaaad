let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like ``
console.log(`The length of "message" is ${message.length}`);
// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`The first character of index 0 is ${message.charAt(0)}`);
// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`The last character of ""message" is ${message.charAt(message.length - 1)}`);
// Log the index of word "you" in message
console.log(`The index of word "you" is ${message.indexOf('you')}`);
// Log the index of word "still" in message
console.log(`The index of word "still" is ${message.indexOf('still')}`);
// Log the index of word "answer" in message
console.log(`The index of word "answer" is ${message.indexOf('answer')}`);
// Log true or false based on whether the word "answers" exist in message or not
console.log(`${message.includes('answer')}`);
// Log true or false based on whether the word "they" exist in message or not
console.log(`${message.includes('they')}`);
// Log true or false based on whether the word "is" exist in message or not
console.log(`${message.includes('is')}`);
// Log true or false based on whether the word "Is" exist in message or not
console.log(`${message.includes('Is')}`);
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
console.log(`${message.slice(3, 6)}`);
// Check and log whether the word from index 7 to 8 is "a" or not
console.log(`${message.slice(7, 8)}`);
// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
console.log(`${message.slice(-3)}`);
// Check and log whether the last 5 character in message is "no!" or not
console.log(`${message.slice(-5)}`);
// Log the message variable, all in lowecase
console.log(`${message.toLowerCase()}`);
// Log the message variable, all in uppercase
console.log(`${message.toUpperCase()}`);
// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
var newMessage = 'are';
console.log(`${newMessage.replace(`are`, `can't`)}`);
// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
var newMessage = 'still';
var newMessage = newMessage.replace('still', '');
console.log(newMessage);
// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
var newMessage = 'still';
var newMessage = newMessage.replace('still', '');
console.log(newMessage);
// Log all the characters from the message variable (you can user for..of loop on string)
for (word of message) {
    for (character of word) {
        console.log(character);
    }
}
// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray = message.split(" ");

// Log all the words of messageArray
for (word of messageArray) {
    console.log(word);
}