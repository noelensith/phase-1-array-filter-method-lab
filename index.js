// Code your solution here
//this function takes in the array of drivers and also a string as an argument. Once the array is ran in 
//drivers.filter it runs a callbackl function that checks to see if the array has any matching names of the string
function findMatching(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase()
    })
}
//this function checks to see if the driver matches with the requirements of the beginning letter, and does not return driver if 
// middle/ending letters match
//the function takes in two arguments drivers,string and retruns a drivers.filter(), that takes in a callback function
//the callback function returns the argument and checks if the passed through argument of the first letter and last letter 
//match to that of the string

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, string.length) === string.toLowerCase()
    })
}

// this function takes in two args and returns the filter if the driver.name match the string
function matchName(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.name === string
    })
}