const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    const avrLiveSpan = 80
    const editedArr = people.map((person) => {
        if (person.yearOfDeath === undefined && thisYear - person.yearOfBirth > avrLiveSpan) {
            person.yearOfDeath = person.yearOfBirth + avrLiveSpan} 
        else if (person.yearOfDeath === undefined && thisYear - person.yearOfBirth < avrLiveSpan) {
            person.yearOfDeath = thisYear
            }
    return person
})
    editedArr.sort((a,b) => {
        const ageA = a.yearOfDeath - a.yearOfBirth
        const ageB = b.yearOfDeath - b.yearOfBirth
        return ageB - ageA
    })
    return editedArr[0]
}

// Do not edit below this line
module.exports = findTheOldest;
