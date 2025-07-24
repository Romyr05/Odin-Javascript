const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]


//maps the array and then for each array it will pass the argument 
// inside the arrow function which it will use to pass the function
const getTheTitles = function(array) {
    const bookie = []
    array.forEach(book => {
        bookie.push(book.title)
    });
    return bookie
};

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
