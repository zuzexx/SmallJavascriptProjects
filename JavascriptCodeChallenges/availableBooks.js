//create book class with title, author, isbn and number of copies
//make a way to get each books availability
// if stock=0 -> out of stock
//if stock <5 low stock
//else in stock
//a function for selling a book -> substract sold books from total books
// a restock function -> adds copies to restock to total number of books

//use javascript classes and a getter function

class Book {
  constructor(title, author, ISBN, currentCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.currentCopies = currentCopies;
  }
}

Book.prototype.getAvailability = function () {
  if (this.currentCopies === 0) {
    return `${this.title}  is out of stock.`;
  } else if (this.currentCopies < 5) {
    return `${this.title} is low in stock. There are ${this.currentCopies} left.`;
  } else {
    return `${this.title} is in stock. There are ${this.currentCopies} left.`;
  }
};

Book.prototype.sellBook = function (soldCopies = 1) {
  if (this.currentCopies >= soldCopies) {
    this.currentCopies -= soldCopies;
    console.log(
      `You bought ${soldCopies}, there is still ${this.currentCopies} left of ${this.title}`
    );
  } else {
    console.log(`We can only sell ${this.currentCopies} of ${this.title}`);
  }
  return this.currentCopies;
};

Book.prototype.restockBook = function (restockedCopies = 10) {
  this.currentCopies += restockedCopies;
  return `You restocked ${this.title}, there is now ${this.currentCopies} copies`;
};

const firstBook = new Book("The best Book", "mrs. Author", 123456567, 0);
const secondBook = new Book("The best Book", "mrs. Author", 123456567, 4);
const thirdBook = new Book("The best Book", "mrs. Author", 123456567, 5);

console.log(firstBook.restockBook());
console.log(secondBook.restockBook(5));
console.log(thirdBook.restockBook(16));

console.log(firstBook.getAvailability());
console.log(secondBook.getAvailability());
console.log(thirdBook.getAvailability());
