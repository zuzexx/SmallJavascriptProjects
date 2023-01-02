/*
 Your task is to create a movie object that takes in five arguments. Title, director, genre, release year and rating. The movie prototype should have a function called get overview, which logs the following overview for each film. Movie, a genre film directed by director was released in release here. It received a rating of rating. You can use either class or function syntax to create your prototype. Once you create your movie object, create a few movies to test it out.
*/

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
}

const firstMovie = new Movie(
  "The best movie ever written",
  "mr. Moviemaker",
  "Comedy",
  "1984",
  "1.5 / 10"
);
const secondMovie = new Movie(
  "I, the movie",
  "mrs. MovieLover666",
  "Horror",
  "2020",
  "7.5 / 10"
);
const thirdMovie = new Movie(
  "The mountain movie",
  "MovieChild",
  "Thriller",
  "2012",
  "8.0 / 10"
);

Movie.prototype.movieOverview = function () {
  return `${this.title}, a ${this.genre} film released in ${this.releaseYear}, was directed by ${this.director} and recieved a score ${this.rating}.`;
};

console.log(firstMovie.movieOverview());
console.log(secondMovie.movieOverview());
console.log(thirdMovie.movieOverview());
