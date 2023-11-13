const userInputString = prompt(
    "Please enter froyo flavors by commas."
)

const stringArray = userInputString.split(",");

console.log(stringArray);

function count(stringArray){
    const map = {};
    for (let i = 0; i < stringArray.length; i++){
        if (map[stringArray[i]]){
            map[stringArray[i]]++;
        } else {
            map[stringArray[i]] = 1;
        }
    }
    return map;
}

console.log(count(stringArray));