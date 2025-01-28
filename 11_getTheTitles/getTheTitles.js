const getTheTitles = function (array) {
    const titles = [];
    for (const book of array) {
        titles.push(book.title);
    }
    return titles;
}
// Do not edit below this line
module.exports = getTheTitles;
