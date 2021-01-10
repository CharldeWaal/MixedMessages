let words = {
    //words to make up randomized sentences
    start: ['Tomorrow\'s', 'Today\'s', 'Next weekend\'s'],
    middle: ['conditions are', 'surf is ', 'surf forecast is'],
    end: ['4-6ft with offshore winds. Cancel your other appointments and go surf!', 'looking great. Get out there!', 'not looking great. Find something else to do.']
};

const sentenceGenerator = () =>
{
    //construct sentence from words object
    let partOne = words.start[Math.floor(Math.random() * 3)];
    let partTwo = words.middle[Math.floor(Math.random() * 3)];
    let partThree = words.end[Math.floor(Math.random() * 3)];

    return partOne + " " + partTwo + " " + partThree;
}

console.log(sentenceGenerator());