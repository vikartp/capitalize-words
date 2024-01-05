/**
 * This function uses a regular expression (/\b\w/g) to match the first letter of each word
 * (\b matches a word boundary, \w matches a word character) 
 * and then applies the toUpperCase() method to capitalize the matched letter.
 * @param {*} inputString any string irrespective of number of characters
 * @returns capitalized string
 */
function capitalizeWords(inputString) {
    return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
}

module.exports = capitalizeWords;
