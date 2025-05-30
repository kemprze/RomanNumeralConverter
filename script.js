// setting up variables
const button = {
    "submitButton": document.getElementById("convert-btn"),
    "resetButton": document.getElementById("reset-btn"),
};

const inputField = document.getElementById("number");
const outputField = document.getElementById("output");

// objects

const romanNumerals = [
    {arabic: 1000, roman: "M"},
    {arabic: 900, roman: "CM"},
    {arabic: 500, roman: "D"},
    {arabic: 400, roman: "CD"},
    {arabic: 100, roman: "C"},
    {arabic: 90, roman: "XC"},
    {arabic: 50, roman: "L"},
    {arabic: 40, roman: "XL"},
    {arabic: 10, roman: "X"},
    {arabic: 9, roman: "IX"},
    {arabic: 5, roman: "V"},
    {arabic: 4, roman: "IV"},
    {arabic: 1, roman: "I"}
]

// functions

const isValidNumberOrEmpty = (arabicNumber) => {
    if (Number.isNaN(arabicNumber)) {
        outputField.value = "Please enter a valid number";
        return false
    } else if (arabicNumber <= 0) {
        outputField.value = "Please enter a number greater than or equal to 1";
        return false
    } else if (arabicNumber >= 4000) {
        outputField.value = "Please enter a number less than or equal to 3999";
        return false
    } else {
        return true
    }
}

const romanConverter = (arabicNumber, dictionary = romanNumerals) => {
    for (let i = 0; i < dictionary.length; i++) {
        if (arabicNumber >= dictionary[i].arabic) {
            return dictionary[i].roman + romanConverter(arabicNumber - dictionary[i].arabic, dictionary);
        }
    }
    return "";
};


button.submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const arabicNumber = parseInt(inputField.value);
    if (isValidNumberOrEmpty(arabicNumber)) {
        outputField.value = romanConverter(arabicNumber)
    } else {
        return
    }
});

button.resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    outputField.value = "";
    inputField.value = "";
})