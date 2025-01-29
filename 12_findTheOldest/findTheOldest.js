const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const birthYear = person.yearOfBirth;
        const deathYear = person.yearOfDeath || currentYear;

        const age = deathYear - birthYear;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
