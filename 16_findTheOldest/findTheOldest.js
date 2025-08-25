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

    const age = function(birth,death){
      if(!death){
        const date = new Date()
        death = date.getFullYear()
      }
      return death - birth
    }


    const findTheOldest = (event) => {
      return event.reduce((oldest,current) => {
        const oldestAge = age(oldest.yearOfBirth,oldest.yearOfDeath)
        const currentAge = age(current.yearOfBirth,current.yearOfDeath)
        console.log(oldestAge);
        console.log(currentAge);
        
        
        return (oldestAge > currentAge) ? oldest:current
      },{})
    }

    testing = findTheOldest(people)
console.log(testing)
// Do not edit below this line
module.exports = findTheOldest;
