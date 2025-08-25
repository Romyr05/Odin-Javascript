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
function getTheTitles(books){
  let listOfBooks = []
  books.map((book) => {
    listOfBooks.push(book.title)
  })
  return listOfBooks
}

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
