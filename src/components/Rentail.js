import React, { useState } from "react";
import useBookRental from "../hooks/useBookRental";

const booksToRent = [
  {
    title: "El nombre del viento",
    author: "Patrick Rothfuss",
    isbn: "9788401342884",
  },
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    isbn: "9788437617180",
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "9789870406738",
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    isbn: "9788420412146",
  },
  {
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    isbn: "9788491811282",
  },
  {
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    isbn: "9788478884457",
  },
  {
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    author: "J.R.R. Tolkien",
    isbn: "9788483461655",
  },
  {
    title: "El alquimista",
    author: "Paulo Coelho",
    isbn: "9780062511409",
  },
  {
    title: "Crimen y castigo",
    author: "Fyodor Dostoyevsky",
    isbn: "9788420650590",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    isbn: "9788491051823",
  },

];


export const Rentail = () => {
  const { rentedBooks, rentBook, extendRental, returnBook } = useBookRental();
  const [selectedDuration, setSelectedDuration] = useState(7); // Valor inicial de duración del alquiler

  const handleRentClick = (book) => {
    const isRented = rentBook(book, selectedDuration);
    if (isRented) {
      alert(`¡Libro "${book.title}" alquilado con éxito por ${selectedDuration} días!`);
    } else {
      alert(`El libro "${book.title}" ya está alquilado.`);
    }
  };

  const handleReturnClick = (isbn) => {
    returnBook(isbn);
    alert("Libro devuelto con éxito");
  };

  const handleExtendClick = (isbn) => {
    extendRental(isbn);
    alert("Plazo de alquiler extendido con éxito");
  };

  const handleDurationChange = (e) => {
    setSelectedDuration(parseInt(e.target.value));
  };

  return (
    <div className="container__rentail">
      <h2 className="rentail__textTitle">Libros disponibles para alquilar</h2>
      <div className="rentail__duration">        
        <label className="duration__text" htmlFor="duration">Selecciona la duración del alquiler:</label>
        <select className="duration__days" id="duration" value={selectedDuration} onChange={handleDurationChange}>
          <option value={7}>7 días</option>
          <option value={14}>14 días</option>
          <option value={30}>30 días</option>
        </select>
      </div>
      <ul className="rentail__books">
        {booksToRent.map((book) => (
          <li key={book.isbn}>
            <div>
              <strong>Título:</strong> {book.title}
            </div>
            <div>
              <strong>Autor:</strong> {book.author}
            </div>
            <div>
              <strong>ISBN:</strong> {book.isbn}
            </div>
            {rentedBooks.some((rentedBook) => rentedBook.isbn === book.isbn) ? (
              <div>
                <button onClick={() => handleReturnClick(book.isbn)}>Devolver</button>
                <button onClick={() => handleExtendClick(book.isbn)}>Extender plazo</button>
              </div>
            ) : (
              <button onClick={() => handleRentClick(book)}>Alquilar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
