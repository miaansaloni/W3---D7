/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
/*
function concatCapStr(str1, str2) {
  let word1 = str1.substring(0, 2);
  let word2 = str2.substring(str2.length - 3);
  let result = word1 + word2;
  result = result.toUpperCase();
  return result;
}
const computedStr = concatCapStr("Coca", "Cola");
console.log("Esercizio 1: ",computedStr);
*/

function concatCapStr(str1, str2) {
  return (str1.substring(0, 2) + str2.substring(str2.length - 3)).toUpperCase();
}
const computedStr = concatCapStr("Coca", "Cola");
console.log("Esercizio 1: ", computedStr);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
{
  function randNumArray() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      const randNum = Math.floor(Math.random() * 101);
      array.push(randNum);
    }
    return array;
  }
  const randArray = randNumArray();
  console.log("Esercizio 2: ", randArray);
}
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function evenFinder(array) {
  return array.filter((number) => number % 2 === 0);
}
let numericArray = [34, 52, 10, 21, 17, 3, 97];
let evenNums = evenFinder(numericArray);
console.log("Esercizio 3: ", evenNums);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function arraySum(array) {
  let sum = 0;
  array.forEach(function (element) {
    if (typeof element === "number" && !isNaN(element)) {
      sum += element;
    }
  });
  return sum;
}
const result = arraySum(numericArray);
console.log("Esercizio 4: ", result);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sum2 = numericArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Esercizio 5: ", sum2);

/*
function sum2(...args) {
  return args.reduce((total, amount) => total + amount);
}
console.log(sum2(6, 8));


/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const numbers1 = [6, 18, 4, 33];
const multiplyNums = function (n) {
  return numbers1.map((numbers) => numbers * n);
};
console.log("Esercizio 6: ", multiplyNums(3));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const strArray = ["Benvenuto", "in", "EPICODE"];
let strLength = strArray.map((word) => word.length);

console.log("Esercizio 7: ", strLength);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function oddNumsOnly() {
  let oddNums = [];
  for (let i = 1; i < 100; i++) {
    //for (let i=1;i<=99;i+=2)
    if (i % 2 !== 0) {
      oddNums.push(i);
    }
  }
  return oddNums;
}
console.log("Esercizio 8: ", oddNumsOnly());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function oldestMovieFinder(movieArr) {
  let oldestMovie = movieArr[0];
  movieArr.forEach((movie) => {
    if (parseInt(movie.Year) < parseInt(oldestMovie.Year)) {
      oldestMovie = movie;
    }
  });

  return oldestMovie;
}

const oldestMovie = oldestMovieFinder(movies);
console.log(oldestMovie);


////////ALTERNATIVA////////
{
  const oldestMovie= function(array){

    let result=array[0]

    if(Array.isArray(array)){
      for(lei i=1; i<array.length; i++;)
      const movie=array[i]
      const currentYear=parseInt(movie.Year)

      if(currentYear<result){
      result=movie
      }

    }
    return result
}

}
console.log(oldestMovie(movies))

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function totalMovies(movieArr) {
  const movieNumber = movieArr.length;
  return movieNumber;
}
const totalMovieNumber = totalMovies(movies);
console.log(totalMovieNumber);


////ALTERNATIVA

const nMovies=(arr=>arr.length)
console.log(nMovies(movies))

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const movieTitles = movies.map((movie) => movie.Title);
console.log("Esercizio 11: ", movieTitles);



/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const currentMillenniumMovies = movies.filter((movie) => {
  const releaseYear = parseInt(movie.Year, 10);
  return releaseYear >= 2000 && releaseYear < 2024;
});

console.log("Esercizio 12: ", currentMillenniumMovies);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const yearsSum = movies.reduce((accumulator, movie) => {
  const releaseYear = parseInt(movie.Year, 10);
  return accumulator + releaseYear;
}, 0);

console.log("Esercizio 13: ", yearsSum);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const getMovieById=(arr, id)=>arr.find(movie=> movie.imbdID===id)

console.log(getMovieById(movies, "tt0087365"))

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const getMovieByYear=(arr, year)=>{
  const yearToNum = parseInt(year)

  if(typeof year==="number" && !isNaN(year)){
    return arr.findIndex(movie=>parseInt(movie.Year)===year)
  }else{
    return -1;
  }
}
const indexFound=getMovieByYear(movies, "2005")

console.log(indexFound!==-1? movies[indexFound]:"non abbiamo trovato un film per quell'anno")