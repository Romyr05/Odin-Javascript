    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]



const get_age = (birth,death) => {
    //no death given in the function
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth
}    


const findTheOldest = function(people) {
    
    return people.reduce((latest,next) => {
        const latest_age = get_age(latest.yearOfBirth, latest.yearOfDeath)
        const next_age = get_age(next.yearOfBirth,next.yearOfDeath)
        
        return latest_age > next_age ? latest : next //updating the accumulator and current
    })
};


console.log(findTheOldest(people).name)
// Do not edit below this line
module.exports = findTheOldest;
