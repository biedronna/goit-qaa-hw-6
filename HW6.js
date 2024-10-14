// 'this' użyte w środku obiektu, to odwołanie do tego obiektu, w którym się znajduje. 
// Zamiast używać nazwę obiektu wewnątrz niego samego możemy użyć 'this'.


//Przykłady użycia:

//1. zwraca nam wiek z obiektu 'osoba'
const osoba= {
imie: 'Anna',
wiek: 20,
getWiek() {
    return this.wiek
}
}

console.log(osoba.getWiek())

//2. zwraca listę owoców z obiektu 'owoce', pozwala dodać nowy owoc do listy

const owoce = {
    owoce: ["banan", "jablko"],
    getOwoce() {
      return this.owoce;
    },
    addOwoc(owoc) {
      this.owoce.push(owoc);
    },
  };


//lista owoców
console.log(owoce.getOwoce());
// dodawanie owoca
owoce.addOwoc("gruszka");
//nowa lista
console.log(owoce.getOwoce());


//ZADANIE 1 

const maciej = {
  username: "Maciej",
  showName() {
    return this.username;
  }
};

maciej.showName();


//ZADANIE 2 

const bookShelf = {
  authors: ["Anna Abc", "Maciej Defg"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

//lista autorów
console.log(bookShelf.getAuthors());

// dodawanie autora
bookShelf.addAuthor("Ewa Abc");
bookShelf.addAuthor("Joanna Xyz");

//nowa lista autorów
console.log(bookShelf.getAuthors());
