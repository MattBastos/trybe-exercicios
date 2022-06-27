const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const formatedBookNames = (books) => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames(books));

const orderedAuthors = (books) => {
  return books.map((book) => ({author: book.author.name, age: book.releaseYear - book.author.birthYear,}))
  .sort((obj1, obj2) => obj1.age - obj2.age);
};

console.log(orderedAuthors(books));

const fantasyAndScienceFictionBooks = (books) => {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}

console.log(fantasyAndScienceFictionBooks(books));

const oldOrderedBooks = (books) => {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => (book.releaseYear < currentYear - 60))
  .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
};

console.log(oldOrderedBooks(books));

const fantasyAndScienceFictionAuthors = (books) => {
  const genres = ['Fantasia', 'Ficção Científica'];
  return books.filter((book) => genres.includes(book.genre))
  .map((book) => book.author.name).sort();
};

console.log(fantasyAndScienceFictionAuthors(books));

const oldBooks = (books) => {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => book.releaseYear < currentYear - 60)
  .map((book) => book.name);
};

console.log(oldBooks(books));

const bestBook = (books) => {
  return books.find((book) => (book.author.name.split(' ')
  .filter((word) => word.endsWith('.')).length === 3)).name;
};

console.log(bestBook(books));