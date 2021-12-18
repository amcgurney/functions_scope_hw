// 1. Parameters are variables that are part of a function. An argument is a value that goes to the function when called.
// 2. Return will, apparently, return a value from a function while console.log prints info sent to the console.
// 3. The function returns a value to the script that called it once it's completed.

//cube calculator

function calculateCube(num) {
    return num*num*num}

console.log(calculateCube(5));

// is a vowel

function isAVowel(letter) {
    let vowel = ["a", "e", "i", "o", "u"]
        for (let i = 0; i < vowel.length; i++){
            if (vowel[i] === letter) {
                return true
            }
    }
}
console.log(isAVowel("a"));

// two lengths

function getTwoLengths(Hank, Hippopopalous) {
    let arr1 = [Hank.length, Hippopopalous.length]
        return arr1
    }
console.log(getTwoLengths("Hank", "Hippopopalous"));