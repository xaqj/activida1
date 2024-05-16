import React from 'react';
import { Book } from "../components/Book";


const BookList = ({ books }) => {
  // Manejar el caso en que no haya libros
  if (!books || books.length === 0) {
    return <div>No se encontraron resultados.</div>;
  }

  return (
    <div className='container__results--search'>
      <h2>Resultados de la búsqueda</h2>
      <div className="container__book">
        {books.map(book => (
          <Book
            key={book.key}
            title={book.title}
            author_name={book.author_name}           
            isbn={book.isbn.find(isbn=> isbn.length===13)}
            categorias={book.subject_facet}
          />
        ))}
      </div>      
    </div>
  );
}

export default BookList;
